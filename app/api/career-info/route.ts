import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
  }

  const { subject, grade } = await req.json()

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a career advisor for Indian students. Provide career information in a structured format."},
        {"role": "user", "content": generatePrompt(subject, grade)}
      ],
      temperature: 0.7,
    })

    const content = completion.choices[0].message.content
    if (!content) {
      throw new Error('No content received from OpenAI')
    }
    const parsedContent = parseCareerInfo(content)

    return NextResponse.json({ careerInfo: parsedContent })
  } catch(error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data)
      return NextResponse.json({ error: error.response.data }, { status: error.response.status })
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`)
      return NextResponse.json({ error: 'An error occurred during your request.' }, { status: 500 })
    }
  }
}

function generatePrompt(subject: string, grade: string) {
  return `Provide a career path for an Indian student studying ${subject} with a grade of ${grade}. Include information about potential job roles, expected salary ranges, and growth opportunities. Format the response as follows:

1. Entry-Level Job Roles:
- [Job Role 1]
- [Job Role 2]
- [Job Role 3]

2. Expected Salary Ranges (Entry-Level):
- [Job Role 1]: [Salary Range]
- [Job Role 2]: [Salary Range]
- [Job Role 3]: [Salary Range]

3. Growth Opportunities:
- [Opportunity 1]
- [Opportunity 2]
- [Opportunity 3]`
}

function parseCareerInfo(content: string) {
  const sections = content.split('\n\n')
  const entryLevelJobs = sections[0].split('\n').slice(1).map(job => job.trim().replace('- ', ''))
  const salaryRanges = sections[1].split('\n').slice(1).map(salary => salary.trim().replace('- ', ''))
  const growthOpportunities = sections[2].split('\n').slice(1).map(opportunity => opportunity.trim().replace('- ', ''))

  return {
    entryLevelJobs,
    salaryRanges,
    growthOpportunities
  }
}
import { Check, Circle } from 'lucide-react'

interface Step {
  title: string;
  completed: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
            index < currentStep ? 'bg-green-500 border-green-500' : 
            index === currentStep ? 'border-blue-500' : 'border-gray-300'
          }`}>
            {index < currentStep ? (
              <Check className="w-5 h-5 text-white" />
            ) : (
              <Circle className={`w-5 h-5 ${index === currentStep ? 'text-blue-500' : 'text-gray-300'}`} />
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-1 ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  )
}
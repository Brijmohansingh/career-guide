export default function BookNow() {
  return <div>Book Now page coming soon!</div>;
}

// 'use client'


// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// //import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Script from 'next/script'

// declare global {
//   interface Window {
//     paypal?: any;
//   }
// }

// function PayPalButton({ amount }: { amount: number }) {
//   const [paid, setPaid] = useState(false)

//   useEffect(() => {
//     if (window.paypal) {
//       window.paypal.Buttons({
//         createOrder: (data: any, actions: any) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount.toString(),
//                 },
//               },
//             ],
//           })
//         },
//         onApprove: async (data: any, actions: any) => {
//           const order = await actions.order.capture()
//           console.log('Sandbox Transaction Completed', order)
//           setPaid(true)
//           alert('Sandbox payment successful! In a real environment, this would trigger a server-side verification.')
//         },
//         onError: (err: any) => {
//           console.error('Sandbox Payment Error:', err)
//           alert('There was an error processing your sandbox payment. Please try again.')
//         },
//       }).render('#paypal-button-container')
//     }
//   }, [amount])

//   if (paid) {
//     return <div className="text-green-600 font-bold">Sandbox Payment Successful!</div>
//   }

//   return <div id="paypal-button-container"></div>
// }

// export default function BookNowPage() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const consultationPrice = 49.99 // You can adjust this price as needed

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
//       <Script 
//         src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD&intent=authorize`} 
//         strategy="afterInteractive"
//       />
//       <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
//         <nav className="container mx-auto flex justify-between items-center px-4">
//           <Link href="/" className="text-3xl font-bold">Career Guide</Link>
//           <ul className="flex space-x-6">
//             <li><Link href="/" className="hover:text-indigo-200 transition-colors">Home</Link></li>
//             <li><Link href="/plans" className="hover:text-indigo-200 transition-colors">Plans</Link></li>
//             <li><Link href="/contact" className="hover:text-indigo-200 transition-colors">Contact Us</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="flex-grow container mx-auto py-12 px-4">
//         <Card className="max-w-md mx-auto shadow-xl">
//           <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
//             <CardTitle className="text-2xl font-bold">Book Your Consultation (Sandbox Mode)</CardTitle>
//           </CardHeader>
//           <CardContent className="mt-6 space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="name">Name</Label>
//               <Input 
//                 id="name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input 
//                 id="email" 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="text-center text-lg font-bold">
//               Consultation Price: ${consultationPrice}
//             </div>
//             <PayPalButton amount={consultationPrice} />
//             <div className="text-sm text-gray-600">
//               <p>This is a sandbox environment. Use these test credit cards:</p>
//               <ul className="list-disc list-inside">
//                 <li>Visa: 4111111111111111</li>
//                 <li>MasterCard: 5555555555554444</li>
//                 <li>Amex: 371449635398431</li>
//               </ul>
//               <p>Use any future expiration date and any 3-digit CVV (4-digit for Amex).</p>
//             </div>
//           </CardContent>
//         </Card>
//       </main>

//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-12">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">About Us</h3>
//               <p className="text-gray-300">We help students make informed decisions about their career paths, providing expert guidance and insights.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
//                 <li><Link href="/plans" className="text-gray-300 hover:text-white transition-colors">Plans</Link></li>
//                 <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//               <p className="text-gray-300">Email: info@careerguide.com</p>
//               <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
//             </div>
//           </div>
//           <div className="mt-12 text-center text-gray-400">
//             © 2023 Career Guide. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
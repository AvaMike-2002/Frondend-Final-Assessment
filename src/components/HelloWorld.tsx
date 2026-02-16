import React from 'react'

interface HelloWorldProps {
  message?: string;
}

function HelloWorld({ message = "Hello World" }: HelloWorldProps) {
  return (
    <div className="p-4 bg-primary-100 rounded-lg text-primary-800 font-semibold">
      {message}
    </div>
  )
}

export default HelloWorld
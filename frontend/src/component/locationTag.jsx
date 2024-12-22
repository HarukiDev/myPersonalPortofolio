import React from 'react'

export default function locationTag() {
  return (
    <div>
      <div className="flex items-center gap-4 px-8 py-6 text-white bg-black rounded-r-lg shadow-lg w-fit">
        {/* Teks Lokasi */}
        <div className="mr-4">
            <p className="text">Located</p>
            <p className="text-lg font-bold">in the Indonesia</p>
        </div>

        {/* Ikon Globe */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF9EF]">
            <a href="https://maps.app.goo.gl/1YKb9YpEcjHYir928">
              <svg className="w-6 h-6 text-black animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" xml:space="preserve"><switch><g><path d="m60 120-1.4-1C56.7 117.6 13 86 13 47 13 21.1 34.1 0 60 0s47 21.1 47 47c0 39-43.7 70.6-45.6 72l-1.4 1zM60 5C36.8 5 18 23.8 18 47c0 32.6 34.5 61 42 66.8 7.5-5.8 42-34.2 42-66.8 0-23.2-18.8-42-42-42z"/><path d="M60 74.9c-15.4 0-27.9-12.5-27.9-27.9S44.6 19.1 60 19.1 87.9 31.6 87.9 47 75.4 74.9 60 74.9zM60 24c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23z"/></g></switch></svg>
            </a>
        </div>
      </div>
    </div>
  )
}

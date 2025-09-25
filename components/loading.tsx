export default function LoadingSpin(){
  return (
    <div className="bg-violet-100">
      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
      </span>
      Processing…
    </div>
  )
}
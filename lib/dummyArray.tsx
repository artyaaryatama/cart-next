export default function DummyArray() {

  const arr = Array.from({length: 100}, (_, i) => {
    return {id: i, isLast: i === 99}
  })

  return arr
}
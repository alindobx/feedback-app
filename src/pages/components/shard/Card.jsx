//UI Style Component

export default function Card({children, reverse}){
  return (
     <section className ={`card ${reverse && 'reverse'}`}>{children}</section>
  )
}
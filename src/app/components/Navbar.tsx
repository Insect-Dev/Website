export default function Navbar(props: {hide: boolean}) {
  return (
    <div className={`sticky top-0 justify-end ${props.hide ? 'hidden' : 'flex'}`}>
      <div className='flex h-16 w-1/2 items-center justify-end gap-8 bg-gradient-to-l from-gray-800 to-transparent px-8'>
        <span>Home</span>
        <span>About Us</span>
        <span>Games</span>
      </div>
    </div>
  )
}



export const Footer = () => {

    const year = new Date().getFullYear()

    const content = <p>DevelopedByDaniel &copy; {year}</p>
  return (
    <footer className='text-center py-2 text-slate-700 bg-bg-primary sticky bottom-0 shadow-lg'>{content}</footer>
  )
}

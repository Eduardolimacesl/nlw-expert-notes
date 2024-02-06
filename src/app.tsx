import logo from './assets/logo-nlw-experts.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
export default function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img 
        src={logo} 
        alt='NLW Expert'
        className='h-6'
      />

      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque aqui sua nota...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}

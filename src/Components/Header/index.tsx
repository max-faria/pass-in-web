import nlwUnitIcon from '../../assets/nlw-unite-icon.svg'

export const Header = () => {

    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUnitIcon} alt="Unit Icon" />
            <nav className="flex gap-5">
                <a href="" className='font-medium text-sm text-zinc-200'>Eventos</a>
                <a href="" className='font-medium text-sm text-zinc-200'>Participantes</a>
            </nav>

        </div>
    )
}
import ListIcons from "../icons/ListIcons"


const LIST_OF_ICONS = [
  {
    name: 'waves',
    color: 'lightblue',
    size: '30'
  }
]

export default function HeaderSection({ title = 'Titulo de la Seccion', subtitle = "" }) {
  return (
    <div className="header">
      <div>
        <h2>{title}</h2>
        {subtitle ? <p className="lead">{subtitle}</p> : ''}
      </div>
      <ListIcons icons={LIST_OF_ICONS} />
    </div>
  )
}

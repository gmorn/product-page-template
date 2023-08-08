import { ButtonConteiner } from './styles'

type Props = {
  children: string
  onClick: () => void
}

export default function MainButton({ children, onClick }: Props) {
  return (
    <ButtonConteiner onClick={onClick}>
      {children}
    </ButtonConteiner>
  )
}
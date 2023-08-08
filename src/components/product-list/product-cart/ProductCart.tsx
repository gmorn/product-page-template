import FavoriteIcon from '@mui/icons-material/Favorite'
import Skeleton from '@mui/material/Skeleton'
import { useState } from 'react'
import { T_Product } from '../product.types'
import Slider from '../slider/Slider'
import { Content, Date, Flex, Price, ProductCartContainer, SeenBlock, Sity, Title } from './styles'

type Props = {
  state: boolean
  item?: T_Product | null
  isLoading?: boolean
}

export default function ProductCart({ state, item = null, isLoading = false }: Props) {

  const [followState, setFollowState] = useState<boolean>(false)

  function splitDigitsByHundreds(inputString: string) {
    const digitsOnly = inputString.replace(/\D/g, "")
    const result = digitsOnly.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$& ")
    return result
  }

  function formatSityName(input: string | null): string {
    if (input) {
      return input.split(' ')[0]
    }
    return ''
  }

  function formatDateTime(input: string | null): string {
    if (input) {
      const [dateTime, offset] = input.split(" ")
      const [datePart, timePart] = dateTime.split("T")
      const [year, month, day] = datePart.split("-").map(Number)
      const [hours, minutes] = timePart.split(":").slice(0, 2)
      const formattedYear = year.toString().slice(-2)
      const formattedMonth = month.toString().padStart(2, '0')
      const formattedDay = day.toString().padStart(2, '0')
      const result = `${formattedYear}.${formattedMonth}.${formattedDay}, ${hours}:${minutes}`
      return result
    }
    return ''
  }

  return (
    <ProductCartContainer state={state}>
      <SeenBlock state={state} active={item ? item.seen : false} >
        Просмотрено
      </SeenBlock>
      <Slider isLoading={isLoading} />
      <Content state={state}>
        <Flex >
          {!isLoading ?
            <Price>
              {splitDigitsByHundreds(`${item && item.price}`)} ₽
            </Price>
            :
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: '#EAEAEA', borderRadius: '8px' }}
              width={state ? 166 : 256}
              height={25}
            />
          }
          {!isLoading ?
            <FavoriteIcon
              onClick={() => setFollowState(!followState)}
              sx={{
                color: followState ? '#00A0AB' : '#C7C7C7',
                transition: '300ms',
                cursor: 'pointer',
                '&:hover': {
                  color: followState ? '#00A0AB' : '#A4A4A4',
                  transform: 'scale(1.1)',
                },
                marginRight: '2px',
              }}
            />
            :
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: '#EAEAEA', borderRadius: '8px' }}
              width={25}
              height={25}
            />
          }
        </Flex>
        {!isLoading ?
          <Title>
            {item && item.title}
          </Title>
          :
          <>
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: '#EAEAEA', borderRadius: '6px', marginTop: `${state ? '0' : '10px'}` }}
              width={state ? 200 : 292}
              height={16}
            />
            {
              !state ?
                <Skeleton
                  variant="rectangular"
                  sx={{ bgcolor: '#EAEAEA', borderRadius: '6px', marginTop: '8px', marginBottom: '16px' }}
                  width={116}
                  height={16}
                />
                : ''
            }
          </>
        }
        {!isLoading ?
          <Flex>
            <Sity>
              {formatSityName(item && item.address)}
            </Sity>
            <Date>
              {formatDateTime(item && item.createdAt)}
            </Date>
          </Flex>
          :
          <>
            {
              state ?
                <Skeleton
                  variant="rectangular"
                  sx={{ bgcolor: '#EAEAEA', borderRadius: '6px' }}
                  width={200}
                  height={14}
                />
                :
                <Flex>
                  <Skeleton
                    variant="rectangular"
                    sx={{ bgcolor: '#EAEAEA', borderRadius: '6px', marginRight: '8px' }}
                    width={177}
                    height={14}
                  />
                  <Skeleton
                    variant="rectangular"
                    sx={{ bgcolor: '#EAEAEA', borderRadius: '6px' }}
                    width={107}
                    height={14}
                  />
                </Flex>
            }
          </>
        }

      </Content>
    </ProductCartContainer>
  )
}
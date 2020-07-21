import ContentLoader from 'react-content-loader'

export const DetailsLoader = () => {
  return (
    <ContentLoader backgroundColor="silver" viewBox="0 0 380 300">
      <rect x="10" y="0" rx="2" ry="2" width="20" height="15" />
      <rect x="50" y="0" rx="2" ry="2" width="40" height="15" />
      <rect x="110" y="0" rx="2" ry="2" width="40" height="15" />
      <rect x="10" y="20" rx="2" ry="2" width="350" height="40" />
      <rect x="10" y="70" rx="2" ry="2" width="350" height="40" />
    </ContentLoader>
  )
}

export const CardsLoader = () => {
  const boxList = [
    <rect key={1} x="0" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={2} x="140" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={3} x="280" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={4} x="0" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={5} x="140" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={6} x="280" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={7} x="0" y="50" rx="2" ry="2" width="120" height="20" />
  ]

  const randomNumber = Math.floor(Math.random() * boxList.length) + 1

  return (
    <ContentLoader backgroundColor="silver" viewBox="0 0 380 70">
      {boxList.filter((_, index) => index < randomNumber).map((i) => i)}
    </ContentLoader>
  )
}

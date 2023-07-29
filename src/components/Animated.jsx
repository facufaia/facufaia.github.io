import AnimatedCursor from "react-animated-cursor"

function Animated () {
  return (
    <>
      <AnimatedCursor
          innerSize={10}
          outerSize={1}
          innerScale={1}
          outerStyle={{
            backgroundColor: 'transparent',
            boxShadow: '0 0 150px 30px #11edab'
          }}
          innerStyle={{
            backgroundColor: 'white'
          }}
          clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
          ]}
      />
    </>
  )
}

export default Animated
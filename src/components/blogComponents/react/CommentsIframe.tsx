import { useRef, useState } from 'react'

export default function CommentsIframe() {
  // const ref = useRef<HTMLIFrameElement>()
  // const [height, setHeight] = useState('0px')
  // const onLoad = () => {
  //   //@ts-ignore
  //   setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px')
  // }
  return (
    <>
      {' '}
      {/* <button onClick={handleClick}>click{someState.count}</button> */}
      <div className="mt-24 w-full h-94">
        <iframe
          //@ts-ignore
          sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-forms
                 allow-same-origin allow-popups "
          id="myFrame"
          src="https://www.mai-comments.vercel.app/"
          width="100%"
          height={'1000px'}
          style={{
            maxWidth: 640,
            width: '100%',
            overflow: 'auto',
          }}
        ></iframe>
      </div>
    </>
  )
}

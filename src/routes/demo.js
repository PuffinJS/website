import { puffin } from '@mkenzo_8/puffin'

const Demo = puffin.element(`
    <div>
        <iframe
        src="https://codesandbox.io/embed/puffinjs-demo1-xb2q9"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="puffinjs-demo1"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
    </div>
`)

export default Demo
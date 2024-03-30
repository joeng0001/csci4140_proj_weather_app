import mitt from 'mitt'

const emitter=mitt()

// can define in components,emit across components
// onUnmount(()=>{
// emitter.off('e')
//})


// emitter.on('e',()=>{ 
//     console.log("fetching...")
// })

// setInterval(()=>{
//     emitter.emit('e')
// },1000)

// setTimeout(()=>{
//     emitter.all.clear()
// },5000)
export default emitter
import { onMounted, onBeforeUnmount } from 'vue';
import * as THREE from "three"
type KeyState = {
  [key: string]: boolean;
};
export default function(){

    const key: KeyState = {
        'w': false,
        'a': false,
        's': false,
        'd': false
    };

    const onKeyDown = (e: KeyboardEvent) => {
        key[e.key] = true;
    };

    const onKeyUp = (e:KeyboardEvent) => {
        key[e.key]=false
    };
    const rotationSpeed = 0.01; 
    const moveSpeed = 0.01; 
    const rotation = new THREE.Quaternion();
    const direction = new THREE.Vector3(0, 0, -1);

    function keyListener(model:any,animation:any){
        if (key['w']){
            direction.set(0, 0, -1);
            direction.applyQuaternion(model.quaternion);
            direction.normalize();
            direction.multiplyScalar(moveSpeed);
            model.position.add(direction);
            animation.play()
        }else{
            animation.stop()
        }
        if (key['a'] || key['d']){
            rotation.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, key['a']?1:-1, 0), rotationSpeed));
            model.setRotationFromQuaternion(rotation);
        }
        
    }

    onMounted(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
    });

    return {keyListener}
}

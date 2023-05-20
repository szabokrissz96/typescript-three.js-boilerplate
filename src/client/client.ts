import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const scene = new THREE.Scene()


const size = 1000;
const divisions = 1000;





const light = new THREE.DirectionalLight(0xffffff, 10)
light.castShadow = true
light.position.set(-50, 25, -50)
light.shadow.mapSize.width = 10000
light.shadow.mapSize.height =10000
light.shadow.camera.near = 0.1
light.shadow.camera.far = 1000
light.shadow.camera.left = -100
light.shadow.camera.right = 100
light.shadow.camera.top = 100
light.shadow.camera.bottom = -100
light.shadow.bias = -0.00003
scene.add(light)

const light2 = new THREE.DirectionalLight(0xffffff, 3)

light2.position.set(50, 25, 50)
light2.shadow.mapSize.width = 10000
light2.shadow.mapSize.height =10000
light2.shadow.camera.near = 0.1
light2.shadow.camera.far = 1000
light2.shadow.camera.left = -100
light2.shadow.camera.right = 100
light2.shadow.camera.top = 100
light2.shadow.camera.bottom = -100
scene.add(light2)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)


  

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.useLegacyLights = false //use this instead of setting physicallyCorrectLights=true property
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 renderer.outputEncoding = THREE.sRGBEncoding;

document.body.appendChild(renderer.domElement);

 

       

const backgroundColor = 0xffffff;
renderer.setClearColor (backgroundColor, 1);


const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,

    wireframe: false,
})



const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0.5, -10)
cube.material.transparent = true
cube.material.opacity = 0.5
scene.add(cube)

const loader = new GLTFLoader()
let floor: THREE.Group | null = null;
let bicikli: THREE.Group | null = null;
let jatek: THREE.Group | null = null;
let tabla: THREE.Group | null = null;
let tuzrako: THREE.Group | null = null;
let lombkorona: THREE.Group | null = null;
let illemhely: THREE.Group | null = null;
let pad: THREE.Group | null = null;
let vedohaz: THREE.Group | null = null;
let tajhaz: THREE.Group | null = null;
let egyebtabla: THREE.Group | null = null;
loader.load(
    'models/lombkorona.glb',
    function (gltf) {

floor = gltf.scene

        floor.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
               const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
               
                
               
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })

       
        scene.add(floor)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)



loader.load(
    'models/lombkorona2.glb',
    function (gltf) {

bicikli = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                 const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


loader.load(
    'models/lombkorona3.glb',
    function (gltf) {

tabla = gltf.scene

        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
               const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

loader.load(
    'models/lombkorona4.glb',
    function (gltf) {

egyebtabla = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

loader.load(
    'models/lombkorona5.glb',
    function (gltf) {

pad = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


loader.load(
    'models/lombkorona6.glb',
    function (gltf) {
tuzrako = gltf.scene

        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


loader.load(
    'models/lombkorona7.glb',
    function (gltf) {
lombkorona = gltf.scene

        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
       

                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048

            }
        })

        scene.add(gltf.scene)
  
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

loader.load(
    'models/lombkorona8.glb',
    function (gltf) {

jatek = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

loader.load(
    'models/lombkorona9.glb',
    function (gltf) {

vedohaz = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

loader.load(
    'models/lombkorona10.glb',
    function (gltf) {

tajhaz = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


loader.load(
    'models/lombkorona11.glb',
    function (gltf) {

illemhely = gltf.scene
        gltf.scene.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh
                m.receiveShadow = true
                m.castShadow = true
         
                            }
            if ((child as THREE.Light).isLight) {
                const l = child as THREE.Light
                l.castShadow = true
                l.shadow.bias = -0.003
                l.shadow.mapSize.width = 2048
                l.shadow.mapSize.height = 2048
            }
        })
        scene.add(gltf.scene)
       
      
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)



window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

/* Liner Interpolation
 * lerp(min, max, ratio)
 * eg,
 * lerp(20, 60, .5)) = 40
 * lerp(-20, 60, .5)) = 20
 * lerp(20, 60, .75)) = 50
 * lerp(-20, -10, .1)) = -.19
 */
function lerp(x: number, y: number, a: number): number {
    return (1 - a) * x + a * y
}

// Used to fit the lerps to start and end at specific scrolling percentages
function scalePercent(start: number, end: number) {
    return (scrollPercent - start) / (end - start)
}

const animationScripts: { start: number; end: number; func: () => void }[] = []




//add an animation that moves the cube through first 40 percent of scroll
animationScripts.push({
    start: 0,
    end: 9,
    func: () => {
        camera.lookAt(cube.position)
        camera.position.set(-44,4.2, -12)
        cube.position.z = lerp(0, 0, scalePercent(0, 9))
        light.position.set(-50, 25, -50)

         if (floor) {
    floor.traverse((child) => {
      if (child instanceof THREE.Mesh) {
         
        const material = child.material as THREE.MeshStandardMaterial;
       
        material.color.set(0xffffff);

      }
    });
  }
        //console.log(cube.position.z)
    },
})

//add an animation that rotates the cube between 40-60 percent of scroll
animationScripts.push({
    start: 9,
    end: 9.3,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(0, -38, scalePercent(9, 9.3)) 
         cube.position.y = lerp(0, 2, scalePercent(9, 9.3)) 
      
    },
})

animationScripts.push({
    start: 9,
    end: 9.25,
    func: () => {
        camera.lookAt(cube.position)
       
        

        camera.position.y = lerp(4.2, 2, scalePercent(9, 9.25))
    },
})

animationScripts.push({
    start: 9.3,
    end: 9.75,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-44, -39.5, scalePercent(9.3, 9.75))
        camera.position.z = lerp(-12, 0, scalePercent(9.3, 9.75))
        
       
    },
})

animationScripts.push({
    start: 9.5,
    end: 9.75,
    func: () => {
       camera.lookAt(cube.position)
       
    
    },
})

animationScripts.push({
    start: 9.75,
    end: 10.25,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-38, -32, scalePercent(9.75, 10.25)) 
         cube.position.y = lerp(2, 5, scalePercent(9.75, 10.25)) 
     
         
    },
})

animationScripts.push({
    start: 9.75,
    end: 10.75,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-39.5, -36.8, scalePercent(9.75, 10.75))
        camera.position.y = lerp(2, 4, scalePercent(9.75, 10.75))
        
       
    },
})
animationScripts.push({
    start: 10.75,
    end: 11,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-36.8, -36.4, scalePercent(10.75, 11))
        
        
       
    },
})

animationScripts.push({
    start: 10.25,
    end: 11.75,
    func: () => {
       camera.lookAt(cube.position)
       
     
         
    },
})


animationScripts.push({
    start: 11.1,
    end: 11.75,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-32, -25, scalePercent(11.1, 11.75)) 
       cube.position.y = lerp(5, 6, scalePercent(11.1, 11.75)) 
     
         
    },
})

animationScripts.push({
    start: 11,
    end: 12,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-36.4, -32, scalePercent(11, 12))
        camera.position.y = lerp(4, 6, scalePercent(11, 12))
        
       
    },
})

animationScripts.push({
    start: 12,
    end: 12.5,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-32, -28, scalePercent(12, 12.5))
       camera.fov = 80;
  camera.updateProjectionMatrix();
        
       
    },
})

animationScripts.push({
    start: 12.5,
    end: 13.5,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-25, -41, scalePercent(12.5, 13.5)) 
        cube.position.z = lerp(0, 10, scalePercent(12.5, 13.5)) 
       cube.position.y = lerp(6, 0, scalePercent(12.5, 13.5)) 
     
         
    },
})

animationScripts.push({
    start: 13.2,
    end: 13.5,
    func: () => {
      
      camera.fov = lerp(80, 30, scalePercent(13.2, 13.5)) 
  camera.updateProjectionMatrix();
         
    },
})

animationScripts.push({
    start: 12.75,
    end: 13.5,
    func: () => {
        camera.lookAt(cube.position)
       
       const startColor = new THREE.Color(0x5e5e5e);
    const endColor = new THREE.Color(0xff0000);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(12.75, 13.5));

 if (bicikli) {
    bicikli.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor);

       
      }
    });
  }
        
       
    },
})

animationScripts.push({
    start: 19.9,
    end: 20.2,
    func: () => {
      
      camera.fov = lerp(30, 80, scalePercent(19.9, 20.2)) 
  camera.updateProjectionMatrix();

     const startColor = new THREE.Color(0xff0000);
    const endColor = new THREE.Color(0x5e5e5e);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(19.9, 20.2));

 if (bicikli) {
    bicikli.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor);

       
      }
    });
  }
         
    },
})

animationScripts.push({
    start: 19.9,
    end: 21.5,
    func: () => {
       camera.lookAt(cube.position)
       
        cube.position.z = lerp(10, -10, scalePercent(19.9, 21.5)) 
     
         
    },
})

animationScripts.push({
    start: 21.5,
    end: 23.2,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-41, -21, scalePercent(21.5, 23.5)) 
        cube.position.z = lerp(-10, -20, scalePercent(21.5, 23.5)) 
     
         
    },
})

animationScripts.push({
    start: 23.2,
    end: 23.5,
    func: () => {
      
      camera.fov = lerp(80, 65, scalePercent(23.2, 23.5)) 
  camera.updateProjectionMatrix();
    const startColor = new THREE.Color(0x5e5e5e);
    const endColor = new THREE.Color(0xff0000);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(23.2, 23.5));

 if (jatek) {
    jatek.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor);

       
      }
    });
  }
         
    },
})

animationScripts.push({
    start: 30.5,
    end: 30.8,
    func: () => {
      
      camera.fov = lerp(65, 80, scalePercent(30.5,30.8)) 
  camera.updateProjectionMatrix();
    const startColor = new THREE.Color(0xff0000);
    const endColor = new THREE.Color(0x5e5e5e);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(30.5,30.8));

 if (jatek) {
    jatek.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor);

       
      }
    });
  }
         
    },
})

animationScripts.push({
    start: 30.5,
    end: 32,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-24, -25, scalePercent(30.5,32)) 
      cube.position.y = lerp(0, 6, scalePercent(30.5,32))
      cube.position.z = lerp(-20, 0, scalePercent(30.5,32)) 
     
         
    },
})

animationScripts.push({
    start: 32,
    end: 34.2,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(-25, 2, scalePercent(32,34.2)) 
       cube.position.z = lerp(0, -0.5, scalePercent(32,34.2))
     
         
    },
})

animationScripts.push({
    start: 32,
    end: 35.1,
    func: () => {
        camera.lookAt(cube.position)
       
        camera.position.x = lerp(-28, 4, scalePercent(32, 35.1))
        camera.position.z = lerp(0, -0.5, scalePercent(32, 35.1))
      
        
       
    },
})

animationScripts.push({
    start: 34.2,
    end: 35.1,
    func: () => {
       camera.lookAt(cube.position)
        cube.position.x = lerp(2, 6, scalePercent(34.2,35.1)) 
        cube.position.y = lerp(6, 2, scalePercent(34.2,35.1))
      cube.position.z = lerp(0, -10, scalePercent(34.2,35.1)) 
      
     
         
    },
})

animationScripts.push({
    start: 35.1,
    end: 35.4,
    func: () => {
      
     
    const startColor = new THREE.Color(0x5e5e5e);
    const endColor = new THREE.Color(0xff0000);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(35.1,35.4));

 if (tajhaz) {
    tajhaz.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor);

       
      }
    });
  }
         
    },
})

animationScripts.push({
    start: 41.2,
    end: 41.5,
    func: () => {
      
     
    const startColor1 = new THREE.Color(0xff0000);
    const endColor1 = new THREE.Color(0x5e5e5e);
    const interpolatedColor1 = startColor1.clone().lerp(endColor1, scalePercent(41.2,41.5));

 if (tajhaz) {
    tajhaz.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor1);

       
      }
    });
  }

  const startColor2 = new THREE.Color(0x5e5e5e);
    const endColor2 = new THREE.Color(0xff0000);
    const interpolatedColor2 = startColor2.clone().lerp(endColor2, scalePercent(41.2,41.5));

 if (vedohaz) {
    vedohaz.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
 material.color.copy(interpolatedColor2);

       
      }
    });
  }
         
    },
})

animationScripts.push({
    start: 48,
    end: 48.3,
    func: () => {
      
     
  

  const startColor2 = new THREE.Color(0xff0000);
    const endColor2 = new THREE.Color(0x5e5e5e);
    const interpolatedColor2 = startColor2.clone().lerp(endColor2, scalePercent(48,48.3));

 if (vedohaz) {
    vedohaz.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material2 = child.material as THREE.MeshStandardMaterial;
       
  material2.color.copy(interpolatedColor2);

       
      }
    });
  }

     
    },
})

animationScripts.push({
    start: 48.3,
    end: 54,
    func: () => {
      
     
  
 camera.lookAt(cube.position)
           cube.position.x = lerp(6, 30, scalePercent(48.3,54)) 
  camera.position.x = lerp(4, 34, scalePercent(48.3, 54))
        

     
    },
})

animationScripts.push({
    start: 54,
    end: 54.3,
    func: () => {
      
      const startColor = new THREE.Color(0x5e5e5e);
    const endColor = new THREE.Color(0xff0000);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(54,54.3));

 if (tuzrako) {
    tuzrako.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
  material.color.copy(interpolatedColor);

       
      }
    });
  }

  const startColor2 = new THREE.Color(0x5e5e5e);
    const endColor2 = new THREE.Color(0xff0000);
    const interpolatedColor2 = startColor2.clone().lerp(endColor2, scalePercent(54,54.3));

 if (pad) {
    pad.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
  material.color.copy(interpolatedColor2);

       
      }
    });
  }

  

     
    },
})

animationScripts.push({
    start: 59.6,
    end: 59.9,
    func: () => {
      
      const startColor = new THREE.Color(0xff0000);
    const endColor = new THREE.Color(0x5e5e5e);
    const interpolatedColor = startColor.clone().lerp(endColor, scalePercent(59.6,59.9));

 if (tuzrako) {
    tuzrako.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
  material.color.copy(interpolatedColor);

       
      }
    });
  }

  const startColor2 = new THREE.Color(0xff0000);
    const endColor2 = new THREE.Color(0x5e5e5e);
    const interpolatedColor2 = startColor2.clone().lerp(endColor2, scalePercent(59.6,59.9));

 if (pad) {
    pad.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
  material.color.copy(interpolatedColor2);

       
      }
    });
  }

  const startColor3 = new THREE.Color(0x5e5e5e);
    const endColor3 = new THREE.Color(0xff0000);
    const interpolatedColor3 = startColor3.clone().lerp(endColor3, scalePercent(59.6,59.9));

 if (illemhely) {
    illemhely.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
       
  material.color.copy(interpolatedColor3);

       
      }
    });
  }
 
    },
})

animationScripts.push({
    start: 63.3,
    end: 64.7,
    func: () => {
      
     
  
 camera.lookAt(cube.position)
           cube.position.x = lerp(30, 25, scalePercent(63.3,64.7)) 
           cube.position.y = lerp(2, 6, scalePercent(63.3,64.7)) 
 
    },
})

animationScripts.push({
    start: 64.7,
    end: 67.5,
    func: () => {
      
     
  

            camera.lookAt(cube.position)
           cube.position.z = lerp(-10, 11, scalePercent(64.7,67.5)) 
           
 
 
    },
})





function playScrollAnimations() {
    animationScripts.forEach((a) => {
        if (scrollPercent >= a.start && scrollPercent < a.end) {
            a.func()
        }
    })
}

let scrollPercent = 0

document.body.onscroll = () => {
    //calculate the current scroll progress as a percentage
    scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
            ((document.documentElement.scrollHeight ||
                document.body.scrollHeight) -
                document.documentElement.clientHeight)) *
        100
    ;(document.getElementById('scrollProgress') as HTMLDivElement).innerText =
        'Scroll Progress : ' + scrollPercent.toFixed(2)
}


function animate() {
    requestAnimationFrame(animate)

    playScrollAnimations()

    render()

   
}

function render() {
    renderer.render(scene, camera)
}

window.scrollTo({ top: 0, behavior: 'smooth' })
animate()

const link = document.getElementById('atlatszo');

link?.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const url = 'https://www.atlatszo.hu'; // Replace with the desired website URL
  const target = '_blank'; // Open in a new tab or window

  window.open(url, target);
});

const link2 = document.getElementById('szabo');

link2?.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const url = 'https://atlatszo.hu/szerzo/szabokrisztian/'; // Replace with the desired website URL
  const target = '_blank'; // Open in a new tab or window

  window.open(url, target);
});

const link3 = document.getElementById('zsilak');

link3?.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const url = 'https://atlatszo.hu/szerzo/zsilakszilvia/'; // Replace with the desired website URL
  const target = '_blank'; // Open in a new tab or window

  window.open(url, target);
});

const myDiv = document.getElementById('arrow');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const scrollThreshold = window.innerHeight * 0.3; // 50vh

  if (scrollPosition > scrollThreshold) {
    myDiv?.classList.add('hidden'); // Hide the div
  } else {
    myDiv?.classList.remove('hidden'); // Show the div
  }
});
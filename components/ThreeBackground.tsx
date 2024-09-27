"use client"

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function Stars() {
  const ref = useRef<THREE.Points>(null!)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  const [geometry, material, stars] = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      vertices.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: true
    })

    const stars = new THREE.Points(geometry, material)

    return [geometry, material, stars]
  }, [])

  return <primitive object={stars} ref={ref} />
}

export default function InteractiveBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const backgroundColor = theme === 'dark' ? '#000000' : '#ffffff'
  const starColor = theme === 'dark' ? 0xffffff : 0x000000

  return (
    <div className="fixed inset-0 z-[-1] transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
      </Canvas>
    </div>
  )
}
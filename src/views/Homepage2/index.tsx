import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
export default function HomePage2() {
    const [minute, setMinute] = useState(0);
    const homepage2Root = useRef<HTMLDivElement>(null);
    const initCanvas = () => {
        const clientHeight = homepage2Root.current?.clientHeight;
        const clientWidth = homepage2Root.current?.clientWidth;
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.width = clientWidth as number;
        canvas.height = clientHeight as number;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const gradient = ctx.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(0.5, "blue");
        gradient.addColorStop(1.0, "red");
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.lineWidth = 10;
        const time = new Date();
        setMinute(time.getMinutes());
        console.log('😂minute:', minute);
        const second = time.getSeconds() + time.getMilliseconds() / 1000;
        let end = second / 120
        if (minute / 2 == 0) {
            end = (60 - second) / 120
        }
        ctx.arc(0, 0, 400, 0 * Math.PI, end * Math.PI);
        console.log('😐end:', end)
        // ctx.rotate(6 * time.getSeconds());
        // ctx.translate(105, 0);
        ctx.stroke();
    }
    const optionCnavas = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const time = new Date();
        ctx.rotate(6 * time.getSeconds());
        ctx.translate(105, 0);
    }
    useEffect(() => {
        initCanvas();
        setInterval(() => {
            initCanvas();
        }, 100);
    }, [])
    return (
        <div ref={homepage2Root} className='w-full h-screen'>
            <canvas id="canvas" width="100%" height="100%"></canvas>
        </div>
    )
}

import React, { useEffect, useRef } from "react";
import "./index.scss";
export default function index() {
    const el = useRef<HTMLCanvasElement>(null);
    const WIDTH = 600;
    const HEIGHT = 600;
    interface Point {
        x: number;
        y: number;
    }
    interface Line {
        start: Point;
        length: number;
        theta: number;
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    const pendingTasks: Function[] = [];
    const frame = () => {
        const tasks = [...pendingTasks];
        pendingTasks.length = 0;
        tasks.forEach((task) => task());
    };
    let frameCount = 0;
    const startFrame = () => {
        requestAnimationFrame(() => {
            frameCount += 1;
            if (frameCount % 3 == 0) frame();
            startFrame();
        });
    };
    startFrame();
    const init = (ctx: any) => {
        ctx.strokeStyle = "#FFF";
        step(ctx, {
            start: { x: WIDTH / 2, y: HEIGHT },
            length: 20,
            theta: -Math.PI / 2,
        });
    };
    const drawLineTo = (ctx: any, p1: Point, p2: Point) => {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    };
    const drawLine = (ctx: any, line: Line) => {
        const { start, length, theta } = line;
        const end = {
            x: start.x + length * Math.cos(theta),
            y: start.y + length * Math.sin(theta),
        };
        drawLineTo(ctx, start, getEndPoint(line));
        return end;
    };
    const getEndPoint = (line: Line) => {
        const { start, length, theta } = line;
        const end = {
            x: start.x + length * Math.cos(theta),
            y: start.y + length * Math.sin(theta),
        };
        return end;
    };
    const step = (ctx: any, line: Line, depth = 0) => {
        const end = getEndPoint(line);
        drawLine(ctx, line);
        if (depth < 4 || Math.random() < 0.6) {
            pendingTasks.push(() =>
                step(
                    ctx,
                    {
                        start: end,
                        length: line.length + (Math.random() * 10 - 5),
                        theta: line.theta - 0.3 * Math.random(),
                    },
                    depth + 1
                )
            );
            if (depth < 4 || Math.random() < 0.6) {
                pendingTasks.push(() =>
                    step(
                        ctx,
                        {
                            start: end,
                            length: line.length + (Math.random() * 10 - 5),
                            theta: line.theta + 0.3 * Math.random(),
                        },
                        depth + 1
                    )
                );
            }
        }
    };
    useEffect(() => {
        const ctx = el.current!.getContext("2d");
        // ctx = el.current!.getContext('2d')!
        init(ctx);
    }, []);
    return (
        <div className="w-screen h-screen bg-dark-400 text-light-50">
            <canvas id="el" ref={el} width="600px" height="600px" />
            <div>12</div>
        </div>
    );
}

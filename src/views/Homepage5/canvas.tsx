import React, { useEffect, useRef, useState } from "react";
import "./canvas.scss"; import { useSize } from 'ahooks';
export default function index() {
    const el = useRef<HTMLCanvasElement>(null);
    const size = useSize(document.querySelector('body'));
    console.log('😉size:', size)
    // 长宽
    const WIDTH = size?.width || 600;
    const HEIGHT = size?.height || 600;
    // 默认起点
    const defaultPoint1 = {
        start: { x: WIDTH / 1.5, y: HEIGHT },
        length: 7,
        theta: -Math.PI / 2,
    }
    const defaultPoint2 = {
        start: { x: 0, y: HEIGHT / 4 },
        length: 7,
        theta: Math.PI / 4,
    }
    // 随机长度
    const randomLength = () => Math.random() * 10 - 5;
    // 随机角度
    const randomTheta = () => Math.random() * 0.3;
    // 默认概率
    const defaultProbability = 0.75;
    // 默认颜色
    const color = "#FFFfff40"
    // 衰减开始深度
    const decayDepth = 8;
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
    // pending任务，队列执行
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
    // 初始化
    const init = (ctx: CanvasRenderingContext2D) => {
        step(ctx, defaultPoint1);
        step(ctx, defaultPoint2);
    };
    // canvas绘图
    const drawLineTo = (ctx: CanvasRenderingContext2D, p1: Point, p2: Point) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    };
    // 抽取参数传递
    const drawLine = (ctx: CanvasRenderingContext2D, line: Line) => {
        const { start, length, theta } = line;
        const end = {
            x: start.x + length * Math.cos(theta),
            y: start.y + length * Math.sin(theta),
        };
        drawLineTo(ctx, start, getEndPoint(line));
        return end;
    };
    // 获取终点
    const getEndPoint = (line: Line) => {
        const { start, length, theta } = line;
        const end = {
            x: start.x + length * Math.cos(theta),
            y: start.y + length * Math.sin(theta),
        };
        return end;
    };
    // 递归执行
    const step = (ctx: CanvasRenderingContext2D, line: Line, depth = 0) => {
        const end = getEndPoint(line);
        drawLine(ctx, line);
        if (depth < 4 || Math.random() < defaultProbability - (depth < decayDepth ? 0 : (depth - decayDepth) / 50)) {
            pendingTasks.push(() =>
                step(
                    ctx,
                    {
                        start: end,
                        length: line.length + randomLength(),
                        theta: line.theta - randomTheta(),
                    },
                    depth + 1
                )
            );
            if (depth < 4 || Math.random() < defaultProbability - (depth < decayDepth ? 0 : (depth - decayDepth) / 50)) {
                pendingTasks.push(() =>
                    step(
                        ctx,
                        {
                            start: end,
                            length: line.length + randomLength(),
                            theta: line.theta + randomTheta(),
                        },
                        depth + 1
                    )
                );
            }
        }
    };
    useEffect(() => {
        const ctx = el.current!.getContext("2d") as CanvasRenderingContext2D
        // ctx = el.current!.getContext('2d')!
        init(ctx);
    }, []);
    return (
        <div className="w-full h-full bg-dark-400 text-light-50">
            <canvas id="el" ref={el} width={size?.width || 600} height={size?.height || 600} />
        </div>
    );
}

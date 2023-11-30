import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import 'tailwindcss/tailwind.css';

const FractalTreeComponent = () => {
    const fractalContainer = useRef(null);

    class FractalTree {
        position: p5.Vector;
        angle: number;
        branchLength: number;
        branchWidth: number;
        angleOffset: number;
        level: number;
        changeColor: any;

        constructor(position: p5.Vector, angle: number, branchLength: number, branchWidth: number, angleOffset: number, level: number) {
            this.position = position.copy();
            this.angle = angle;
            this.branchLength = branchLength;
            this.branchWidth = branchWidth;
            this.angleOffset = angleOffset;
            this.level = level;
        }

        show(p: p5) {
            p.strokeWeight(this.branchWidth);
            p.stroke(0);

            const end = p.createVector(
                this.position.x + p.cos(this.angle) * this.branchLength,
                this.position.y + p.sin(this.angle) * this.branchLength
            );

            p.line(this.position.x, this.position.y, end.x, end.y);

            if (this.level < 8) {
                const leftBranch = new FractalTree(end, this.angle - this.angleOffset, this.branchLength * 0.67, this.branchWidth * 0.67, this.angleOffset, this.level + 1);
                const rightBranch = new FractalTree(end, this.angle + this.angleOffset, this.branchLength * 0.67, this.branchWidth * 0.67, this.angleOffset, this.level + 1);

                leftBranch.show(p); // Pasa p como argumento
                rightBranch.show(p); // Pasa p como argumento
            }
        }

        applyWind(windDirection: p5.Vector) {
            this.angle += windDirection.x * 0.015;
        }

        oscillate(p: p5) {
            this.angle += p.sin(p.frameCount / 100) * 0.01;
        }

        grow(p: p5) {
            this.branchLength += p.sin(p.frameCount / 50) * 0.5;
        }
    }

    useEffect(() => {
        let tree: FractalTree | undefined;
        let myP5: p5 | undefined;

        const sketch = (p: p5) => {
            p.setup = () => {
                const canvas = p.createCanvas(500, 500); // Modificar el tamaño del canvas aquí
                canvas.parent(fractalContainer.current); // Agrega el canvas al div
                tree = new FractalTree(p.createVector(p.width / 2, p.height), p.radians(-90), 100, 25, p.PI / 6, 0);
            };

            p.draw = () => {
                p.background(255);
                if (tree) {

                    tree.grow(p); // Agrega esta línea para la animación de crecimiento
                    tree.show(p); // Pasa p como argumento
                }
            };

            p.mouseMoved = () => {
                if (tree) {
                    const colorChange = p.map(p.mouseX, 10, p.width, 0, 255);
                    tree.changeColor(colorChange);
                }
            };
        };

        myP5 = new p5(sketch);

        return () => {
            myP5.remove();
        };
    }, []);

    return <div ref={fractalContainer} id="fractal-container" className="h-75 w-full flex items-center justify-center"></div>;
};

export default FractalTreeComponent;

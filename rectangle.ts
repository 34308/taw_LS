class point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}
class rectangle {
    constructor(public x: point, public y:point ,public z : point,public w: point) {}

    move(dx: point, dy: point,dz: point,dw: point) {
        this.x = dx;
        this.y = dy;
        this.z=dz;
        this.w=dw;
    }
    getArea(){
        var a=this.calculateDistance(this.x,this.y)
        var b=this.calculateDistance(this.z,this.w)
        return a*b;
    }
    calculateDistance(x1: point, x2: point): number {
        const dx = x2.x - x1.x;
        const dy = x2.y - x1.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}
export { rectangle,point };

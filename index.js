// Add your Circle class here
const pi = Math.PI
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  
  get diameter(){
  return  this.radius * 2
  }
  
  get circumference(){
    return Math.PI * this.diameter
  }
  
  get area (){
    return Math.PI * this.radius**this.radius
  }
  
  
  
}
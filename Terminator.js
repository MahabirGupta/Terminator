class Terminator{

    constructor(model, hp){
        this.model = model
        this.hp = hp
        this.kill = () => {
            console.log(`You are dead`)
        }
        this.selfdestroy = () => {
            console.log(`You self-destroyed`)
        }
        this.heal = () => {
            hp=hp + 50;
            console.log(`You are healed. hp =`, + hp)
        }
        
    }


} 
const x = new Terminator('mary',23 )
console.log(x)
x.kill()

const y = new Terminator('david',56 )
console.log(y)
y.selfdestroy()

const z = new Terminator('john',10 )
console.log(z)
z.heal()

  
  
 
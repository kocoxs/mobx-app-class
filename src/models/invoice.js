import { types } from 'mobx-state-tree'

const Invoice = types.model('Invoice',{
    currency: types.string,
    is_paid: false
})
.actions((self)=>({
    pagar(){
        self.is_paid = true
    }
}))
.views((self)=>({
    status(){
        return self.is_paid ? "Esta pagado" : "No esta pagado"
    }
}))

export default  Invoice
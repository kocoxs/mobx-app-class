import { types } from 'mobx-state-tree'
import { values } from 'mobx'

const Todo =  types.model('Todos',{
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(() => User)))
}).actions((self) => ({
    setName(name) {
        self.name = name
    },
    toggle() {
        self.done = !self.done
    },
    setUser(user) {
        if (user === "") {
            self.user = undefined
        } else {
            self.user = user
        }
    }
}))

const User = types.model('User',{
    id: types.identifier,
    name: types.optional(types.string, "")
})

const RootStore = types.model({
    users: types.map(User),
    todos: types.map(Todo)
})
.views((self)=>({
    get pendingCount(){
        return values(self.todos).filter( todo => !todo.done ).length
    },
    get completedCount(){
        return values(self.todos).filter( todo => todo.done ).length
    }
}))
.actions((self) => ({
    addTodo({id, name}) {
        self.todos.set(id, Todo.create({name}))
    }
}))

export default RootStore
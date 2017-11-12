import React, {Component} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import TodoCounter from '../components/TodoCounter';
import alertify from 'alertify.js'

class App extends Component {
    state = { 
        todos: [
            {
                text: "Посадить React",
                priority: true
            },
            {
                text: "Построить React",
                priority: false
            },
            {
                text: "Вырстить React",
                priority: false
            }
        ] 
    };

    addTodo = text => {
        if (text.trim() === '') {
            alertify.alert('First you need to enter the text of the task!');
            return;
        }

        for (let i = 0; i < this.state.todos.length; i++) {
            if (text === this.state.todos[i].text) {
                alertify.alert("You have already added such a task!");
                return;
            }
        }

        let todos = this.state.todos.concat({text, priority: false});
        this.setState({todos});
    }

    changePriority = i => {
        let todos = this.state.todos;
        todos[i].priority = !todos[i].priority;
        this.setState({todos});
    }

    isDisabledInput = () => this.state.todos.length >= 10;

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <div id="content-header">
                        <h1>Todo List</h1>
                    </div>
                    <div>
                        <Route exact path="/" 
                            render={(props) => <TodoList todos={this.state.todos} 
                            onChangePriority={this.changePriority}/>}/>
                        <Route path="/add" 
                            render={(props) => <TodoInput disabled={this.isDisabledInput()} 
                                onSubmit={this.addTodo}/>}/>
                        <TodoCounter 
                            text="You have todos"
                            count={this.state.todos.length}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
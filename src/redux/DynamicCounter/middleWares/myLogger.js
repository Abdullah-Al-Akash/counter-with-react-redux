import rootReducers from "../../rootReducer";

const myLogger = (store) => (next) => (action) => {
        console.log(`Action: ${JSON.stringify(action)}`);
        console.log(`CurrentState: ${JSON.stringify(store.getState())}`);

        const upcomingState = [action].reduce(rootReducers, store.getState());
        console.log(`upcoming State: ${JSON.stringify(upcomingState)}`);
        // Pass Action:
        return next(action);
}

export default myLogger;
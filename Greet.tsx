import { GreetProps } from './Types'

export const Greet = ({name, num, loggedIn}: GreetProps) => {
    return (
        <div>
            <h2>
                {loggedIn
                ? `Welcome ${name} meeting at ${num} time`
                : `Welcome Guest !!`
                }
            </h2>
        </div>
    )
}
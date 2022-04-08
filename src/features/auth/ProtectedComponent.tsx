import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useProtectedMutation } from '../../app/services/auth'

export function ProtectedComponent() {
    const [attemptAccess, { data, error, isLoading }] = useProtectedMutation()

    return (
        <div>
            <div>
                <Box>
                    <Button onClick={() => attemptAccess()}>
                        Make an authenticated request
                    </Button>
                </Box>
                <Box>
                    {data ? (
                        <>
                            Data:
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </>
                    ) : error ? (
                        <>
                            Error: <pre>{JSON.stringify(error, null, 2)}</pre>
                        </>
                    ) : null}
                </Box>
            </div>
        </div>
    )
}

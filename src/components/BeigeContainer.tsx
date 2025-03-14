import { ReactElement } from 'react'

const BeigeContainer = ({ children }: { children: ReactElement }): ReactElement => {
    return (
        <div style={{ background: '#FEF8E5', width: '500px', height: '1000px', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: "10px" }}>
            {children}
        </div>
    )
}



export default BeigeContainer
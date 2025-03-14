import { ReactElement } from 'react'


const CTA = ({ text }: { text: string }): ReactElement => {
    return (
        <button style={{ borderRadius: '25px', padding: '10px 25px', boxShadow: 'none', border: 'none', fontWeight: '800', fontSize: '18px', background: '#A2D8E5', color: 'black', cursor: 'pointer' }}>{text}</button>
    )
}

export default CTA
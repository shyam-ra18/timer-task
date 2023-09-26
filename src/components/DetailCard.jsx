import React from 'react';

const DetailCard = ({ status, time, label }) => {

    return (
        <div style={{
            position: 'relative',
            background: status === 'ACCEPTED' ? '#f7eb3b' : 'red',
            width: 'auto',
            margin: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.4rem 0.8rem',
            borderRadius: '0.8rem',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box'
        }}>

            <div style={{
                position: 'absolute',
                content: '""',
                width: '60px',
                height: '12px',
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                backgroundColor: 'orange',
                left: '10px',
                top: '-10%',
                transform: 'translateY(-50%)',
            }} />

            <div style={{
                display: 'flex',
                justifyContent: label !== "DECLINE JOB" ? "flex-end" : 'space-between',
                alignItems: 'flex-start',
                fontSize: "0.8rem",
                width: '100%',
                height: "60px"
            }}>
                {label && (
                    <span style={{
                        background: 'tomato',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '0.6rem',
                        marginRight: '0.5rem'
                    }}>
                        {label}
                    </span>
                )}
                <span style={{
                    background: label && "tomato",
                    color: label ? 'white' : "red",
                    padding: label && '0.5rem',
                    borderRadius: '0.6rem',
                }}>
                    {status} {time && `(${time})`}
                </span>
            </div>

        </div>
    )
}

export default DetailCard;

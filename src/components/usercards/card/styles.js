import styled from 'styled-components'
import { Card } from 'antd'

export const CardMain = styled(Card)`
    margin: 15px;
`
export const CardImageCoverHeader = styled.div`
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CardImageCoverHeaderImage = styled.img`
    width: 200px;
    height: 200px;
`
export const CardBodyUserFullName = styled.h3``
export const CardBodyContactContiner = styled.div`
    display: flex; 
    flex-direction: row;
`
export const CardBodyContactInfo = styled.p`
    margin-left: 10px;
    color: rgba(0,0,0,.65);
`
export const CardActionButton = styled.button`
    background: none; 
    border: none; 
    cursor: pointer; 
    outline: none;
`


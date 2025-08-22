export default function Tab({children, button, ButtonsContainer}){
    return(
        <>
        <ButtonsContainer>
            {button}
        </ButtonsContainer>
        {children}
        </>
    )
}
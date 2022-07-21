import { FooterBody, FooterWrapper, Copyright, FooterTitle, FooterDescription } from "./footerelements";

export const Footer = () => {
    return (
        <>
            <FooterBody>
                <FooterTitle>
                    Gamers Den
                </FooterTitle>
                <FooterWrapper>
                    <FooterDescription>
                        The destination for the brotherhood of gamers. Find and discuss about popular games of
                         different platforms. Filter based on your preferences and take part in community discussions.
                    </FooterDescription>
                </FooterWrapper>
                <Copyright>© 2022 Gamers-Den, All rights reserved</Copyright>
            </FooterBody>
        </>
    )
}

export default Footer;
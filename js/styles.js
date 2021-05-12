import styled from "./index.js"
import { render } from "./index.js"

// Styled components
const TitlesStyles = styled.setStyle`
    font-family: system-ui;
    color: orange;
    font-size: 50px;
    text-shadow: 2px 2px 0 black;
`;

const ParagraphStyles = styled.setStyle`
    font-family: system-ui;
    color: black;
    font-size: 15px;
`;

const SpanStyles = styled.setStyle`
    font-family: system-ui;
    color: gray;
    font-size: 10px;
`;

// component function (Tagged Template)
export const componentTaggedTemplate = (strings, ...dynamicValues) => props => {
    let newContent = strings.slice() // creo una copia en memoria
    dynamicValues.forEach((value, index) => {
        newContent[index] += props[value]
    })
    return newContent.join('')          
}

export function strongTaggedTemplate(strings, ...dynamicsValues) {            
let newContent = ''
strings.forEach((string, index) => {        
const strong = dynamicsValues[index] ? `<strong>${dynamicsValues[index]}</strong>` : ''                
newContent += `${string} ${strong}`            
})      
return `<p>${newContent}</p>`
}

// en el template literal mandamos 'message' y llamamos por el mismo nombre la propiedad dentro de props, para poder hacer match dentro de la función que retorna "component"
const info = strongTaggedTemplate`(Reto Curso ${'JavaScript Avanzado'} para ${'ReactJs'})`
const title = 'Uso de Styled Component';
const props = { message: 'No te rindas', name: 'Braian' }
const paragraph = componentTaggedTemplate`Te quiero decir que ${'message'} y sigue luchando ${'name'}`(props);  

render(SpanStyles(info, 'span'), window.span);
render(TitlesStyles(title, 'h1'), window.header);
render(ParagraphStyles(paragraph, 'p'), window.container);
// render function
export const render = (component, container) => container.innerHTML = component

// Object styled
const styled = {
  setStyle: styles => (content, label) => {
    const tagsInLine = [ 'b', 'big', 'i', 'small', 'tt', 'abbr', 'acronym', 'cite', 'code', 'dfn', 'em', 'kbd', 'strong', 'samp', 'time', 'var', 'a', 'bdo', 'br', 'img', 'map', 'object', 'q', 'script', 'span', 'sub', 'sup', 'button', 'input', 'label', 'select', 'textarea' ]
    
    if (tagsInLine.includes(label)) {
      return `<${label} style="${styles}" ${content} />`
    }
    
    return `<${label} style="${styles}">${content}</${label}>`
  }
}

export default styled



            


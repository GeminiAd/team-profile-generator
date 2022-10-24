/* 
 *  Generates and returns the CSS in the form of a string that will be written to the css file.
 *
 *  @return { string }: The string representing the CSS that will be written to file and is used to style the generated team profile HTML correctly.
 */
function generateCSS() {
    return `header {
    height: 100px;
    background: linear-gradient(to right, cornflowerblue, darkblue);
    
    display: flex;
    justify-content: center;
    align-items: center;
}
    
.card {
    display: relative;
    
    min-height: 300px;
    
    background-color: aliceblue;
}
    
i {
    position: absolute;
    
    top: 1em;
    right: .5em;
}
    
@media (max-width: 576px) {
    .card {
        min-height: 0;
    }
}`;
}

module.exports = generateCSS;
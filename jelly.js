const style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    `;
document.getElementsByTagName('head')[0].appendChild(style);

const divBig = document.createElement('div');
divBig.id = 'divBig';
divBig.style.margin = '100px';
divBig.style.display = 'flex';
divBig.style.justifyContent = 'center';
document.getElementsByTagName('body')[0].appendChild(divBig);

const divTop = document.createElement('div');
divTop.id = 'divTop';
divTop.style.display = 'flex';
divTop.style.flexDirection = 'column';
divTop.style.alignItems = 'center';
document.getElementById('divBig').appendChild(divTop);

const divButton = document.createElement('div');
divButton.id = 'divButton';
divButton.innerHTML = '<h1>SPLIT</h1>';
divButton.style.display = 'flex';
divButton.style.justifyContent = 'center';
divButton.style.alignItems = 'center';
divButton.style.textAlign = 'center';
divButton.style.color = '#FFF';
divButton.style.cursor = 'pointer';
divButton.style.backgroundColor = '#A4849A';
divButton.style.height = '50px';
divButton.style.width = '200px';
divButton.style.marginBottom = '50px';
divButton.style.borderRadius = '5px';
divButton.style.border = 'solid 2px #662B44';
document.getElementById('divTop').appendChild(divButton);

var i = 0;

document.getElementById('divButton').onclick=function(){
    i++;
    if(i%2==0){
        divLeft.style.display = 'flex';
        divRight.style.display = 'none';    
        divButton.innerHTML = '<h1>SPLIT</h1>';
    }
    else{
        divLeft.style.display = 'none';
        divRight.style.display = 'flex';    
        divButton.innerHTML = '<h1>ASSEMBLE</h1>';
    }
}

const divLeft = document.createElement('div');
divLeft.id = 'divLeft';
divLeft.style.height = '300px';
divLeft.style.width = '300px';
divLeft.innerHTML = '<img src="jelly.png"/>';
document.getElementById('divTop').appendChild(divLeft);

const divRight = document.createElement('div');
divRight.id = 'divRight';
divRight.style.display = 'none';
divRight.style.height = '400px';
divRight.style.width = '400px';
divRight.style.justifyContent = 'space-between';
divRight.style.flexWrap = 'wrap';
document.getElementById('divTop').appendChild(divRight);

const div1 = document.createElement('div');
div1.style.height = '100px';
div1.style.width = '100px';
div1.style.margin = '0 50px 50px 0';
div1.style.backgroundImage = 'url("jelly.png")';

const div2 = document.createElement('div');
div2.style.height = '100px';
div2.style.width = '100px';
div2.style.margin = '0 50px 50px 0';
div2.style.backgroundImage = 'url("jelly.png")';
div2.style.backgroundPositionX = '200px';

const div3 = document.createElement('div');
div3.style.height = '100px';
div3.style.width = '100px';
div3.style.margin = '0 0 50px 0';
div3.style.backgroundImage = 'url("jelly.png")';
div3.style.backgroundPositionX = '100px';

const div4 = document.createElement('div');
div4.style.height = '100px';
div4.style.width = '100px';
div4.style.margin = '0 50px 50px 0';
div4.style.backgroundImage = 'url("jelly.png")';
div4.style.backgroundPositionY = '200px';

const div5 = document.createElement('div');
div5.style.height = '100px';
div5.style.width = '100px';
div5.style.margin = '0 50px 50px 0';
div5.style.backgroundImage = 'url("jelly.png")';
div5.style.backgroundPositionX = '200px';
div5.style.backgroundPositionY = '200px';

const div6 = document.createElement('div');
div6.style.height = '100px';
div6.style.width = '100px';
div6.style.margin = '0 0 50px 0';
div6.style.backgroundImage = 'url("jelly.png")';
div6.style.backgroundPositionX = '100px';
div6.style.backgroundPositionY = '200px';

const div7 = document.createElement('div');
div7.style.height = '100px';
div7.style.width = '100px';
div7.style.margin = '0 50px 50px 0';
div7.style.backgroundImage = 'url("jelly.png")';
div7.style.backgroundPositionY = '100px';

const div8 = document.createElement('div');
div8.style.height = '100px';
div8.style.width = '100px';
div8.style.margin = '0 50px 50px 0';
div8.style.backgroundImage = 'url("jelly.png")';
div8.style.backgroundPositionX = '200px';
div8.style.backgroundPositionY = '100px';

const div9 = document.createElement('div');
div9.style.height = '100px';
div9.style.width = '100px';
div9.style.margin = '0 0 50px 0';
div9.style.backgroundImage = 'url("jelly.png")';
div9.style.backgroundPositionX = '100px';
div9.style.backgroundPositionY = '100px';

document.getElementById('divRight').appendChild(div1);
document.getElementById('divRight').appendChild(div2);
document.getElementById('divRight').appendChild(div3);
document.getElementById('divRight').appendChild(div4);
document.getElementById('divRight').appendChild(div5);
document.getElementById('divRight').appendChild(div6);
document.getElementById('divRight').appendChild(div7);
document.getElementById('divRight').appendChild(div8);
document.getElementById('divRight').appendChild(div9);
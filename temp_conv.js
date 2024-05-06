function conversion()
{
    let from_u = document.getElementById('from').value;   //taking in the from unit
    let to_u = document.getElementById('to').value;        // taking in the to unit
    let temp = parseFloat(document.getElementById('temp').value);    // taking in the tempearture entered by user

    let res_val;   //variable for storing converted result 
    let res_u=to_u;  //variable for storing converted unit

    if(from_u==='C')
    {
        if (to_u === 'F')
        {
            res_val = (temp * 9/5) +32;
        } 
        else if (to_u === 'K')
        {
            res_val = temp + 273.15;
        }
        else
        {
            res_val = temp;
        }
    }
    else if(from_u==='F')
    {
        if (to_u === 'C')
        {
            res_val = (temp -32) * 5/9;
        } 
        else if (to_u === 'K')
        {
            res_val = (temp -32) * 5/9 + 273.15;
        }
        else
        {
            res_val = temp;
        }
    }
    else
    {
        if (to_u === 'C')
        {
            res_val = temp - 273.15;
        } 
        else if (to_u === 'F')
        {
            res_val = (temp - 273.15) * 9/5 +32;
        }
        else
        {
            res_val = temp;
        }

    }
    document.getElementById('result').value = res_val.toFixed(2) + ' ' + res_u;
    
}
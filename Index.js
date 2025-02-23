//Napište program, který zjistí vlastnosti zadaného čísla na ruletě.
//Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0–36. 
// Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, 
// že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená.
//  Nula není ani lichá ani sudá, ani černá ani červená.

//Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.

const zadaneCislo=  Number (prompt ('Zadej číslo od 0 do 36 včetně: '));

const sudeCislo = zadaneCislo % 2;

if (zadaneCislo === 0) {
    document.body.innerHTML +=  'Zadané číslo je  <b> nula </b> a je <b style="color: green;">zelené.</b>';
   }
 else if ((sudeCislo===0 && zadaneCislo>=1 && zadaneCislo <=10)  || (sudeCislo===0 && zadaneCislo >=19 &&zadaneCislo <=28 ))
    {
        document.body.innerHTML += 'Zadané číslo: ' + '<b>' + zadaneCislo + '</b>' +   ' je <b> sudé </b> a je <b> černé. </b>';
    }
else if ((sudeCislo!==0 && zadaneCislo>=1 && zadaneCislo <=10)  || (sudeCislo!==0 && zadaneCislo >=19 &&zadaneCislo <=28 ))
    {
        document.body.innerHTML += 'Zadané číslo: ' + '<b>' + zadaneCislo + '</b>' +   ' je <b>liché  </b> a je <b style="color:red;"> červené. </b>';
    }        
else if ((sudeCislo===0 && zadaneCislo>=11 && zadaneCislo <=18)  || (sudeCislo===0 && zadaneCislo >=29 &&zadaneCislo <=36 ))
    {
        document.body.innerHTML += 'Zadané číslo: ' + '<b>' + zadaneCislo + '</b>' +   ' je <b>sudé </b> a je <b style="color:red;"> červené. </b>';
    }
else if((sudeCislo!==0 && zadaneCislo>=11 && zadaneCislo <=18)  || (sudeCislo!==0 && zadaneCislo >=29 &&zadaneCislo <=36 ))
    {
        document.body.innerHTML += 'Zadané číslo: ' + '<b>' + zadaneCislo + '</b>' +   ' je <b> liché  </b> a je <b> černé. </b>';
    };









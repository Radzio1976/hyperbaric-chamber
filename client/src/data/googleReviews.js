const googleReviews = () => {
  let reviews = [
    {
      id: 0,
      name: "Edward Artymowicz",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 11, 2023",
      reviewLink: "https://g.co/kgs/oeo5Wu",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtezA9nNOZDx_ZrkYuxo1KXxz81v6jmDmcRqV_6KAVdD=s40-c-rp-mo-br100",
    },
    {
      id: 1,
      name: "Mateusz Molski",
      starsQty: 5,
      reviewText: `skorzystałam z oferty -komory hiperbarycznej- jestem bardzo zadowolona.
      SUPER Pani Marzenka, wszystko profesjonalnie i bezkonfliktowo. POLECAM`,
      date: "Lipiec 16, 2023",
      reviewLink: "https://g.co/kgs/nsaeLv",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtcIhNYP17c2qXb9nXrerdGzBTVUaAJrlpykQlzjsX2B=s40-c-rp-mo-br100",
    },
    {
      id: 2,
      name: "Ewa Mikołajczyk",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/MtGQo8",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfeJ0vn-M_2RuUiMGpnvQtVWu_1kFhBsIwus0EcWW0o=s40-c-rp-mo-br100",
    },
    {
      id: 3,
      name: "Anna Skrabulska",
      starsQty: 5,
      reviewText: `Po czterech zabiegach moje samopoczucie poprawiło się zdecydowanie. Więcej energii do działania, poprawa koncentracji.
      Pani Marzena bardzo miła i kompetentna osoba. Gorąco polecam:)`,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/U4T9J1",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfReL8-_Ex4WnwTuJwFVKBgBUbDDjn40PdMC-msuiTq=s40-c-rp-mo-br100",
    },
    {
      id: 4,
      name: "Leszek",
      starsQty: 5,
      reviewText: `W Czerwcu przebywałem z żoną tydzień w Domu Zdrojowym w Cieplicach. Wykupiliśmy także pakiet różnych zabiegów rehabilitacyjnych, Pobyt w tym uzdrowisku wspominamy jako bardzo trafiony, w obiekcie jest bardzo czysto, personel bardzo profesjonalny i miły jeszcze dodam że jedzenie jest super jak domowe (mimo pięciu zabiegów dziennie ciężko z rzucić wagę, po prostu trzeba m.ż. ) Jeszcze dodam że na samym dole jest komora hiperbaryczna. Pierwszy raz w życiu coś takiego widziałem na oczy, mojej żonie się to bardzo spodobało bo już na ten temat dużo wiedziała więc wykupiła pakiet kilku seansów, sprawa polega na tym że w chodzi się do środka b. miła Pani zamyka mnie szczelnie w tej kabinie kosmicznej (bo właśnie tak wygląda ) włącza aparaturę i powoli wzrasta ciśnienie gdzieś w okolice 3,5 bara na twarzy mam maseczkę i łykam tlen. Warto zabrać ze sobą coś do czytania bo ten lot w kosmos trwa godzinę wtedy czas szybko mija, po kilku seansach można znaczną poprawę samopoczucia.
      Polecam, przeżycia są bardzo pozytywne.
      Leszek Ważydrąg`,
      date: "Lipiec 19, 2023",
      reviewLink: "https://g.co/kgs/XEryko",
      userAvatar:
        "https://lh3.googleusercontent.com/a-/AD_cMMSBebfAoxEYM1c-YKGSXn8GHwswjzesjU9fGyJS9tDAhFE=w36-h36-p-rp-mo-ba3-br100",
    },
  ];

  let reversedReviews = reviews.reverse();

  for (let i = 0; i < reversedReviews.length; i++) {
    reversedReviews[i].id = i;
  }

  return reversedReviews;
};

export default googleReviews;

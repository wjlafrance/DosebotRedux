module.exports = function Logger() {
  return {
    execute: function(client, message) {
      const meanThings = [
        'slut',
        'whore',
        'cunt',
        'bitch',
        'dog',
        'whore',
        'pig',
        'piggy',
        'cow',
        'cum whore',
        'cumslut',
        'cum dumpster',
        'anal slut',
        'anal fiend',
        'useless',
        'idiot',
        'worm',
        'fucktoy',
        'playtoy',
        'cumbucket',
        'loser',
        'ass licker',
        'attention whore',
        'dick',
        'dick rider',
        'naughty',
        'needy',
        'panty sniffer',
        'slave',
        '3-holed cunt',
        '2-hole whore',
        '3-hole whore',
        'dog in heat',
        'bitch in heat',
        'cum dump',
        'cum junkie',
        'cock craving bitch',
        'cock sucker',
        'maid',
        'property',
        'pet',
        'painslut',
        'hooker',
        'pussy',
        'pussy licker',
        'ass',
        'toilet',
        'pony girl',
        'little girl',
        'meat',
        'hornball',
        'tongue fucker',
        'footstool',
        'fuck',
        'fucker',
        'fuckbunny',
        'fuckhole',
        'fuckmeat',
        'fuckmuffin',
        'fuckpole',
        'fuck slave',
        'fuckstick',
        'mother fucker',
        'hole',
        'cum muffin',
        'cum rag',
        'bad girl',
        'cum receptacle',
        'good girl',
        'girl',
        'sex slave',
        'freak',
        'ball licker',
        'cunt licker',
        'gay',
        'freak',
        'fag',
        'faggot',
        'queer',
        'servant',
        'dickhead',
        'cum guzzling tonsil jockey',
        'jail pussy',
        'ass wipe',
        'fuckhead',
        'worthless piece of shit',
        'worthless',
        'dumbass',
        'dumb bitch',
        'naughty little slut',
        'coward',
        'crybaby',
        'sissy',
        'sissy-maid',
        'cuck',
        'cuckold',
        'skank',
        'dirty slut',
        'cock whore',
        'ass slut',
        'plug slut',
        'rover',
        'toilet paper',
        'spit cup',
        'ash tray',
        'urinal',
        'waste',
        'lazy ass',
        'shit stain',
        'dopey',
        'idiot',
        'stupid',
        'dummy'
      ];
      const adejectives = ['goddamn', 'fucking', 'miserable', 'worthless'];
      const rand = Math.floor(Math.random() * 20);

      if (rand > 10) {
        const meanThingsRand = Math.floor(Math.random() * meanThings.length);
        const adjectivesRand = Math.floor(Math.random() * adejectives.length);

        message.channel.send(
          `<@371151824331210755> you ${adejectives[adjectivesRand]} ${
            meanThings[meanThingsRand]
          }`
        );
      }
    }
  };
};

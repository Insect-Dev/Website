import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-12 lg:px-[20%] px-20 bg-white dark:bg-zinc-900 dark:text-white text-justify">
      <div className="fixed top-0 flex items-center justify-between h-16 w-full bg-white/50 dark:bg-zinc-900/50 p-5 backdrop-blur-[2px] border-b border-gray-200 navbar">
        <h1 className="text-2xl font-black self-center w-1/2">Ant Studios</h1>
        <div className="w-1/2 justify-end space-x-5 hidden sm:flex menu">
          <a href="#">About</a>
          <a href="#">Our Games</a>
          <a href="#">Contact</a>
        </div>
        <div className="w-1/2 justify-end space-x-5 flex sm:hidden menu">
          <FontAwesomeIcon icon={faBars} className="w-12 h-12" />
        </div>
      </div>

      <div className="space-y-2 pt-14 pb-24 text-lg">
        <div className="flex p-3 space-x-3">
          <div className="rounded-2xl dark:backdrop-brightness-90 shadow-lg w-1/2 p-5">
            <h2 className="text-xl font-semibold">About Us</h2>
            <p>
              We are a group creating games. <br />
              Currently we are only 2 people, but we hope to grow. <br />
              This text really needs to be longer. It's too short for professional description. <br />
              So I'll just write some dummy text that will be used for filling out the space <br />
              I wonder what will be this text in production... <br />
              Probably something stoopid.
            </p>
          </div>
          <div className="rounded-2xl dark:backdrop-brightness-90 shadow-lg w-1/2 p-3">
            <h2 className="text-xl font-semibold">Our Team</h2>
            <div className="space-y-2 mt-5">
              {
                [
                  {
                    name: "Tomek",
                    since: "4.03.2023",
                    image: "https://source.unsplash.com/random/150x150/?male-employee"
                  },
                  {
                    name: "Kuba",
                    since: "4.03.2023",
                    image: "https://source.unsplash.com/random/150x150/?male-person"
                  },
                  {
                    name: "Konrad",
                    since: "some time.",
                    image: "https://source.unsplash.com/random/150x150/?male-face"
                  },
                ].map((member) => (
                  <div className="dark:backdrop-brightness-75 backdrop-blur-xl p-5 rounded-2xl shadow-lg flex hover:scale-[105%] transition-all duration-[120ms] ease-in-out hover:bg-zinc-100 dark:hover:bg-zinc-900">
                    <img className="rounded-full mx-auto shadow-lg mb-4" src={member.image} width={150} height={150} alt={member.name} />
                    <div>
                      <p className="mb-2 text-center font-medium text-xl">
                        {member.name}
                      </p>
                      <p className="text-center">
                        Since <code>{member.since}</code>
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex nec nisl suscipit sollicitudin. Vestibulum metus diam, tristique a dictum in, sagittis eget turpis. Cras venenatis fermentum dictum. Etiam mi urna, consequat in fringilla ac, aliquam egestas ipsum. Nullam quis ultricies augue. Morbi cursus id velit sed consectetur. Aenean tellus enim, porttitor a finibus non, tempor sit amet ipsum.
        </p><p>
          Integer at nibh quis nisl aliquam dictum in vitae sapien. Suspendisse quis arcu finibus, vestibulum neque sit amet, vestibulum nibh. Aliquam viverra libero ac maximus interdum. Pellentesque et pretium ipsum. Donec quis porta purus. Suspendisse urna mauris, blandit ut tristique viverra, pellentesque eu ligula. Sed vitae tincidunt orci, sit amet sollicitudin risus. Proin nec scelerisque elit, vel viverra nisi. Integer id ipsum leo. Nam non mi porttitor, laoreet nulla in, tincidunt metus. Donec nec ullamcorper neque.
        </p><p>
          Morbi at risus pharetra, egestas erat eget, ornare justo. Maecenas consequat, mi non pretium mattis, lacus nibh aliquam lorem, id sollicitudin justo risus quis leo. Donec malesuada, ante vitae porttitor egestas, metus justo aliquam lacus, et volutpat mi lorem eget nisl. Mauris arcu odio, suscipit id massa sit amet, ultricies interdum felis. Nam a congue neque. Curabitur ac massa vitae sem pharetra dignissim. Duis sodales purus at risus bibendum sagittis. Cras dolor nunc, auctor vitae pretium ac, mollis in enim.
        </p><p>
          Phasellus sed purus consequat, eleifend lectus quis, lobortis nisi. Morbi lacinia urna arcu, at porttitor dolor lobortis vitae. Nunc quis nunc nec metus egestas aliquet. In nec vulputate massa. Nulla blandit auctor orci non aliquam. Maecenas egestas, sapien id suscipit sagittis, purus tortor dictum turpis, et feugiat risus lorem a eros. Duis faucibus erat ex, ac feugiat urna congue in. Suspendisse dapibus tristique nisl id fermentum. Fusce nec posuere lorem. Donec vitae ex vitae felis blandit sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id purus viverra, accumsan justo eu, sodales leo. Vivamus ex enim, lobortis at tempus laoreet, accumsan id elit.
        </p><p>
          Integer nec facilisis ipsum. Curabitur feugiat nec metus in mattis. Curabitur blandit accumsan ipsum, tincidunt tempor odio scelerisque id. Etiam sit amet feugiat urna. Integer non bibendum lorem. Maecenas tempus turpis eget lacus ultricies imperdiet. Proin aliquet blandit massa a gravida. Curabitur nunc sem, ornare a faucibus et, rhoncus sed velit. Proin porta sem eu sollicitudin vestibulum. Nunc nec dui cursus, vulputate orci accumsan, auctor ex. Duis nisl erat, maximus pharetra facilisis a, tincidunt vel ipsum. Donec a venenatis velit, quis fringilla ante. Donec nec elit metus. Nam sed cursus erat, imperdiet viverra eros. Curabitur in accumsan dui.
        </p><p>
          Curabitur ullamcorper mi ac consectetur dignissim. Sed pharetra ut urna vitae dictum. Donec ipsum mi, blandit eget ante id, tempor mollis elit. Aliquam justo sapien, commodo placerat sapien a, laoreet dignissim neque. Nunc blandit eget tellus eget molestie. Etiam consequat faucibus lorem, id dictum massa tincidunt ac. Pellentesque aliquet est semper odio pharetra tincidunt. Proin ultricies, mauris et lobortis efficitur, ligula tortor scelerisque eros, non feugiat velit nisi fermentum leo. In efficitur, sem in ornare lobortis, nulla lorem varius orci, eget accumsan elit velit et felis. Sed diam dui, bibendum id erat in, porta mollis elit.
        </p><p>
          Curabitur finibus venenatis arcu, quis laoreet libero luctus in. Aenean ornare magna nibh, eget efficitur orci rhoncus eu. Maecenas lobortis mauris magna, ac tristique massa porttitor vitae. Pellentesque non nulla eget lacus tempus ornare ut vitae nulla. Ut hendrerit, massa nec dignissim tincidunt, urna dui interdum purus, ut fringilla risus elit a justo. Fusce vel purus urna. Suspendisse egestas gravida consequat. Proin ornare ultrices pretium. Morbi bibendum congue ipsum sed condimentum. Maecenas egestas nunc sapien, et tempus tellus vulputate eu. Morbi laoreet tellus sit amet venenatis semper. Proin molestie, lorem id pretium cursus, augue orci elementum odio, in accumsan turpis lectus eget dolor. Vivamus id libero enim. Mauris at aliquet mi. Suspendisse feugiat consectetur imperdiet.
        </p><p>
          Praesent id hendrerit tellus, ut finibus odio. Proin aliquet auctor mi, eu posuere nulla molestie ac. Ut nulla odio, pulvinar et varius sed, egestas ac dolor. Duis in nisl ut diam tempus faucibus sed sed velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ex, efficitur at ex at, tristique sollicitudin leo. Pellentesque mollis nisl vitae diam congue, ut imperdiet enim interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p><p>
          Praesent et enim nulla. Suspendisse potenti. Etiam elit dui, laoreet vitae feugiat sit amet, luctus ac tellus. Pellentesque eu tellus neque. Mauris vulputate sapien id risus euismod tristique. Integer vitae quam ac felis porttitor ultrices. Curabitur at ornare enim. Phasellus a lacinia augue. Praesent interdum semper augue in blandit. Donec accumsan nibh magna, eu ornare lacus vulputate non. Etiam eros lectus, ornare id viverra et, convallis et velit. Vivamus nec mi eleifend, tincidunt ex quis, pretium tellus. Aliquam dapibus turpis nec aliquam aliquam. Nunc et ex metus. Curabitur et lorem ultricies, bibendum odio quis, ultricies neque.
        </p><p>
          Aliquam egestas congue nisi, ac suscipit est dictum at. Donec placerat leo volutpat, imperdiet enim sed, ullamcorper dolor. Donec convallis blandit diam sit amet pellentesque. Maecenas in tempus orci. Nullam et interdum nunc. Sed varius fringilla neque, eget ultricies quam sollicitudin vel. Aliquam hendrerit velit vel urna mattis tempus.
        </p><p>
          Donec maximus augue eget fermentum scelerisque. Vivamus at viverra mauris. Vivamus vel est non magna varius faucibus. Etiam rutrum tortor auctor est tempus, sed laoreet libero porta. Donec posuere ullamcorper lectus, sit amet elementum sem tempus quis. Nulla non commodo lacus. Curabitur egestas eleifend vehicula. Mauris et porta tellus. Donec tempus augue mauris, et condimentum lectus pharetra id. Mauris accumsan ante accumsan eros imperdiet scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur feugiat sem sed justo tempor, eu posuere velit malesuada.
        </p><p>
          Proin ullamcorper dolor eu diam suscipit, fermentum eleifend tortor rhoncus. Mauris magna arcu, consequat at ex et, pharetra tristique leo. Suspendisse ultricies metus purus, aliquam pretium sem gravida eu. Nulla facilisi. Fusce rutrum aliquet nulla eget tincidunt. Phasellus tincidunt, lacus id auctor feugiat, justo velit ornare ipsum, hendrerit ullamcorper nisl nisl eget justo. Aliquam vestibulum nec odio at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </p><p>
          In ac vehicula ex. Suspendisse magna felis, facilisis in ante auctor, aliquam finibus lectus. Suspendisse mauris augue, pretium ut mi nec, lacinia condimentum mi. Phasellus accumsan enim ut risus elementum, quis facilisis erat maximus. Nunc ornare gravida ante. Ut quis ligula aliquet, hendrerit lectus ac, maximus ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur libero mattis risus vestibulum, eu elementum felis congue. Donec mauris odio, accumsan non enim sit amet, maximus cursus mauris.
        </p><p>
          Ut fermentum dolor in massa lacinia sodales. Sed mattis feugiat magna, ut condimentum magna scelerisque viverra. Nam facilisis volutpat leo sit amet gravida. Nunc rhoncus id lacus nec porttitor. Morbi lorem purus, placerat nec massa eu, aliquet pulvinar lacus. Ut sed commodo dolor. Aenean facilisis urna a fermentum aliquet. Nunc luctus auctor ipsum, sed elementum nisl lacinia eu. Suspendisse potenti.
        </p><p>
          Cras ac urna at nibh malesuada pharetra ac eget nunc. Praesent pretium sapien a bibendum pellentesque. Donec euismod hendrerit velit finibus euismod. Integer vitae nisl vulputate, eleifend sem in, elementum tellus. Nullam mattis non metus id tempus. Aenean non dapibus risus. Quisque scelerisque mi a odio ultricies congue. In vitae dolor quis tellus tincidunt convallis eget sed erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dui tortor, fermentum non finibus vitae, auctor in felis. Maecenas vitae bibendum arcu, et ullamcorper libero. Duis purus ipsum, faucibus vitae vestibulum at, vestibulum eu metus. Maecenas nunc ligula, commodo sed sem vehicula, malesuada scelerisque quam. Praesent mollis felis quis libero condimentum, vel maximus tortor mattis. Donec feugiat aliquet felis, in consectetur tellus molestie sit amet. Praesent iaculis congue justo, vel elementum nisl posuere ac.
        </p><p>
          Sed volutpat tincidunt vehicula. Curabitur gravida commodo rutrum. In nec pharetra mauris. Mauris a congue ipsum, sit amet mollis eros. Pellentesque eu eleifend ligula, a rhoncus tortor. Nunc feugiat, lectus quis luctus pulvinar, purus mi tincidunt ante, et luctus massa lacus ac urna. Mauris luctus nisi ut orci iaculis, et interdum leo egestas. Vivamus sed quam metus. Pellentesque sagittis libero neque, sit amet tempor ex eleifend ac. Nulla id augue at lectus finibus cursus nec nec ligula. Phasellus ut tincidunt purus. Etiam mattis ex vitae velit imperdiet, id bibendum erat gravida.
        </p><p>
          Nulla molestie mattis risus, nec fringilla eros faucibus nec. Morbi blandit non ante ut placerat. Cras porta lectus non vehicula dapibus. Nam sodales risus id augue tempor, ac venenatis sapien imperdiet. Sed tortor mi, varius sit amet tellus auctor, sodales iaculis lectus. Praesent id metus sed neque fermentum molestie. Nunc neque dolor, maximus id ornare in, scelerisque a sem. Sed commodo ullamcorper turpis, ut pulvinar erat rhoncus ut. Sed feugiat, arcu vel elementum ultrices, ipsum sapien interdum leo, in ornare ipsum neque eu eros. Duis elementum pharetra vestibulum. Phasellus aliquet tortor id varius tristique. Ut sed est blandit, consequat lacus vel, consectetur nisl.
        </p><p>
          Donec nisl sapien, laoreet et diam vitae, accumsan pellentesque justo. Sed et nunc massa. Nulla eget justo et eros pulvinar sodales. Duis varius quam vitae ante dignissim sagittis. Sed bibendum ipsum vitae nunc maximus, et egestas diam venenatis. Praesent volutpat mattis nisi sed vulputate. Suspendisse porta, arcu at pulvinar semper, metus massa facilisis eros, at feugiat nunc ipsum vitae nisl. Aenean ac nibh id sem varius placerat. Integer pellentesque lacus in velit luctus, sit amet lobortis est laoreet. Duis sed egestas nisl, mattis varius mi. Integer id pulvinar tellus, aliquet consequat felis. Nulla facilisis metus et velit dignissim, nec vestibulum risus ultrices.
        </p><p>
          Cras pretium, justo in maximus finibus, sapien ante viverra mi, id varius sem magna a urna. Ut aliquam, elit vel luctus auctor, tellus ipsum convallis nulla, eu auctor risus justo tempus neque. Integer feugiat ultricies leo, quis efficitur dolor auctor vitae. Cras pharetra tortor eget lectus lacinia efficitur. Proin id volutpat diam. In hac habitasse platea dictumst. Sed gravida, odio quis rhoncus malesuada, justo odio bibendum tortor, quis accumsan erat enim sed ligula. Phasellus nec ipsum euismod, finibus mi at, sollicitudin metus. Nam eu dolor molestie nulla congue lobortis.
        </p><p>
          Cras vitae efficitur enim. Pellentesque gravida orci posuere commodo sagittis. Nulla risus velit, placerat ac auctor nec, aliquam sit amet eros. Suspendisse tempus justo id risus rutrum, et porttitor lacus tempor. Etiam rhoncus eros in felis auctor, sed posuere urna interdum. Nam aliquet augue justo, ultricies auctor massa lobortis sed. Nam ullamcorper tortor pharetra elementum feugiat. Sed vitae laoreet nunc. Nam non nisi accumsan, porttitor nulla ut, aliquam nisl. Nulla volutpat est sit amet nisl suscipit, sed vestibulum enim feugiat. Aliquam a tincidunt tortor, vel semper ex. Integer elementum at metus et auctor. Nunc nec laoreet massa. Fusce mattis, enim vitae mattis suscipit, nibh velit efficitur mauris, ut condimentum ante sapien quis erat. Quisque eu pulvinar velit, in commodo neque.
        </p>
      </div>
    </main>
  )
}

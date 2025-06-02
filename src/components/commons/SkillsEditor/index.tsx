/* eslint-disable */
/* prettier-ignore */
import { FileCode, Circle } from 'lucide-react'

export default function SkillsEditor() {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-[#1e1e1e] text-white shadow-lg">
      <div className="flex items-center bg-[#323233] px-4 py-2">
        <div className="mr-4 flex space-x-2">
          <Circle size={12} fill="#ff5f56" stroke="none" />
          <Circle size={12} fill="#ffbd2e" stroke="none" />
          <Circle size={12} fill="#27c93f" stroke="none" />
        </div>
        <span className="text-sm opacity-50">skills.tsx</span>
      </div>

      <div className="flex">
        <div className="w-12 flex-shrink-0 bg-[#252526] p-2">
          <FileCode size={24} className="text-[#7e7e7e]" />
        </div>

        <div
          className="flex-grow overflow-auto p-4"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-[#569cd6]">const</span>{' '}
              <span className="text-[#4ec9b0]">skills</span>{' '}
              <span className="text-[#9cdcfe]">=</span> {'{'}
              <br />
              {'  '}
              <span className="text-[#9cdcfe]">habilidadesTecnicas:</span> {'{'}
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">
                desenvolvimentoFullStack:
              </span>{' '}
              <span className="text-[#ce9178]">
                "Experiência em criação e manutenção de sistemas web, com foco
                em tecnologias modernas e melhores práticas"
              </span>
              ,
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">frontEnd:</span> {'['}
              <br />
              {'      '}
              <span className="text-[#ce9178]">"React"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Next"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Tailwind"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Styled Components"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"FlexBox"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Grid"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"ShadCN UI"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Design Responsivo"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Prototipação no Figma"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Otimização para SEO"</span>
              <br />
              {'    '}],
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">backEnd:</span> {'['}
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Node.js"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"TypeScript"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Fastify"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Express"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Knex"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"TypeORM"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"PrismaORM"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"C#"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">".NET"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"ASP.NET"</span>,
              <br />
              {'    '}],
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">integracaoAPIs:</span> {'['}
              <br />
              {'      '}
              <span className="text-[#ce9178]">"REST APIs"</span>,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"GraphQL"</span>
              ,
              <br />
              {'      '}
              <span className="text-[#ce9178]">"Webhooks"</span>
              <br />
              {'    '}],
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">versionamentoCodigo:</span>{' '}
              <span className="text-[#ce9178]">"Git, Github"</span>,
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">docker:</span>{' '}
              <span className="text-[#ce9178]">
                "Containerização de aplicativos"
              </span>
              ,
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">bancoDeDados:</span>{' '}
              <span className="text-[#ce9178]">
                "Postgre, MySQL, SQLite, SQL Server e MongoDB"
              </span>
              ,
              <br />
              {'    '}
              <span className="text-[#9cdcfe]">metodologiasAgeis:</span>{' '}
              <span className="text-[#ce9178]">
                "Experiência em trabalhar com equipes multidisciplinares
                utilizando práticas ágeis"
              </span>
              ,
              <br />
              {'  '}
              {'}'}
              <br />
              {'}'};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

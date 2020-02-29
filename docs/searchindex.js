Search.setIndex({docnames:["changelog/index","changelog/v0.10.0","changelog/v0.10.1","changelog/v0.11.0","changelog/v0.11.1","changelog/v0.11.2","changelog/v0.11.3","changelog/v0.11.4","changelog/v0.11.5","devguide/custom-decorators","devguide/index","devguide/tests","incompat","index","intro","src/asyncworker/asyncworker","src/asyncworker/asyncworker.connections","src/asyncworker/asyncworker.easyqueue","src/asyncworker/asyncworker.exceptions","src/asyncworker/asyncworker.http","src/asyncworker/asyncworker.rabbitmq","src/asyncworker/asyncworker.signals","src/asyncworker/asyncworker.signals.handlers","src/asyncworker/asyncworker.sse","src/asyncworker/asyncworker.testing","src/asyncworker/asyncworker.types","src/asyncworker/modules","userguide/asyncworker-app/hooks","userguide/asyncworker-app/index","userguide/asyncworker-app/intro","userguide/asyncworker-app/storage","userguide/handlers/http/doc","userguide/handlers/http/index","userguide/handlers/index","userguide/handlers/rabbitmq","userguide/index","userguide/quickstart","userguide/updates/index","userguide/utils/index","userguide/utils/run_every","userguide/utils/timeit"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog/index.rst","changelog/v0.10.0.rst","changelog/v0.10.1.rst","changelog/v0.11.0.rst","changelog/v0.11.1.rst","changelog/v0.11.2.rst","changelog/v0.11.3.rst","changelog/v0.11.4.rst","changelog/v0.11.5.rst","devguide/custom-decorators.rst","devguide/index.rst","devguide/tests.rst","incompat.rst","index.rst","intro.rst","src/asyncworker/asyncworker.rst","src/asyncworker/asyncworker.connections.rst","src/asyncworker/asyncworker.easyqueue.rst","src/asyncworker/asyncworker.exceptions.rst","src/asyncworker/asyncworker.http.rst","src/asyncworker/asyncworker.rabbitmq.rst","src/asyncworker/asyncworker.signals.rst","src/asyncworker/asyncworker.signals.handlers.rst","src/asyncworker/asyncworker.sse.rst","src/asyncworker/asyncworker.testing.rst","src/asyncworker/asyncworker.types.rst","src/asyncworker/modules.rst","userguide/asyncworker-app/hooks.rst","userguide/asyncworker-app/index.rst","userguide/asyncworker-app/intro.rst","userguide/asyncworker-app/storage.rst","userguide/handlers/http/doc.rst","userguide/handlers/http/index.rst","userguide/handlers/index.rst","userguide/handlers/rabbitmq.rst","userguide/index.rst","userguide/quickstart.rst","userguide/updates/index.rst","userguide/utils/index.rst","userguide/utils/run_every.rst","userguide/utils/timeit.rst"],objects:{"":{asyncworker:[15,0,0,"-"]},"asyncworker.app":{App:[15,1,1,""]},"asyncworker.app.App":{freeze:[15,2,1,""],get_connection:[15,2,1,""],get_connection_for_route:[15,2,1,""],handlers:[15,3,1,""],route:[15,2,1,""],run:[15,2,1,""],run_every:[15,2,1,""],run_on_shutdown:[15,2,1,""],run_on_startup:[15,2,1,""],shutdown:[15,2,1,""],shutdown_os_signals:[15,3,1,""],startup:[15,2,1,""]},"asyncworker.bucket":{Bucket:[15,1,1,""],BucketFullException:[15,4,1,""]},"asyncworker.bucket.Bucket":{is_empty:[15,2,1,""],is_full:[15,2,1,""],pop_all:[15,2,1,""],put:[15,2,1,""],used:[15,2,1,""]},"asyncworker.conf":{Settings:[15,1,1,""]},"asyncworker.conf.Settings":{Config:[15,1,1,""]},"asyncworker.conf.Settings.Config":{allow_mutation:[15,3,1,""],env_prefix:[15,3,1,""]},"asyncworker.connections":{AMQPConnection:[15,1,1,""],Connection:[15,1,1,""],ConnectionsMapping:[15,1,1,""],SSEConnection:[15,1,1,""]},"asyncworker.connections.AMQPConnection":{Config:[15,1,1,""],items:[15,2,1,""],keys:[15,2,1,""],put:[15,2,1,""],register:[15,2,1,""],set_connections:[15,2,1,""],values:[15,2,1,""]},"asyncworker.connections.AMQPConnection.Config":{arbitrary_types_allowed:[15,3,1,""]},"asyncworker.connections.ConnectionsMapping":{add:[15,2,1,""],with_type:[15,2,1,""]},"asyncworker.consumer":{Consumer:[15,1,1,""]},"asyncworker.consumer.Consumer":{consume_all_queues:[15,2,1,""],keep_runnig:[15,2,1,""],on_before_start_consumption:[15,2,1,""],on_connection_error:[15,2,1,""],on_consumption_start:[15,2,1,""],on_message_handle_error:[15,2,1,""],on_queue_error:[15,2,1,""],on_queue_message:[15,2,1,""],queue_name:[15,2,1,""],start:[15,2,1,""]},"asyncworker.easyqueue":{connection:[17,0,0,"-"],exceptions:[17,0,0,"-"],message:[17,0,0,"-"],queue:[17,0,0,"-"]},"asyncworker.easyqueue.connection":{AMQPConnection:[17,1,1,""]},"asyncworker.easyqueue.connection.AMQPConnection":{close:[17,2,1,""],connection_parameters:[17,2,1,""],is_connected:[17,2,1,""]},"asyncworker.easyqueue.exceptions":{EmptyQueueException:[17,4,1,""],InvalidMessageSizeException:[17,4,1,""],MessageError:[17,4,1,""],UndecodableMessageException:[17,4,1,""]},"asyncworker.easyqueue.message":{AMQPMessage:[17,1,1,""]},"asyncworker.easyqueue.message.AMQPMessage":{ack:[17,2,1,""],channel:[17,3,1,""],connection:[17,3,1,""],delivery_tag:[17,3,1,""],deserialized_data:[17,2,1,""],queue_name:[17,3,1,""],reject:[17,2,1,""],serialized_data:[17,3,1,""]},"asyncworker.easyqueue.queue":{BaseJsonQueue:[17,1,1,""],BaseQueue:[17,1,1,""],DeliveryModes:[17,1,1,""],JsonQueue:[17,1,1,""],QueueConsumerDelegate:[17,1,1,""]},"asyncworker.easyqueue.queue.BaseJsonQueue":{content_type:[17,3,1,""],deserialize:[17,2,1,""],serialize:[17,2,1,""]},"asyncworker.easyqueue.queue.BaseQueue":{deserialize:[17,2,1,""],serialize:[17,2,1,""]},"asyncworker.easyqueue.queue.DeliveryModes":{NON_PERSISTENT:[17,3,1,""],PERSISTENT:[17,3,1,""]},"asyncworker.easyqueue.queue.JsonQueue":{consume:[17,2,1,""],deserialize:[17,2,1,""],put:[17,2,1,""],serialize:[17,2,1,""],stop_consumer:[17,2,1,""]},"asyncworker.easyqueue.queue.QueueConsumerDelegate":{on_before_start_consumption:[17,2,1,""],on_connection_error:[17,2,1,""],on_consumption_start:[17,2,1,""],on_message_handle_error:[17,2,1,""],on_queue_message:[17,2,1,""]},"asyncworker.exceptions":{InvalidConnection:[15,4,1,""],InvalidRoute:[15,4,1,""]},"asyncworker.http":{decorators:[19,0,0,"-"]},"asyncworker.http.decorators":{parse_path:[19,5,1,""]},"asyncworker.options":{Actions:[15,1,1,""],AutoNameEnum:[15,1,1,""],DefaultValues:[15,1,1,""],Events:[15,1,1,""],Options:[15,1,1,""],RouteTypes:[15,1,1,""]},"asyncworker.options.Actions":{ACK:[15,3,1,""],REJECT:[15,3,1,""],REQUEUE:[15,3,1,""]},"asyncworker.options.DefaultValues":{BULK_FLUSH_INTERVAL:[15,3,1,""],BULK_SIZE:[15,3,1,""],ON_EXCEPTION:[15,3,1,""],ON_SUCCESS:[15,3,1,""],RUN_EVERY_MAX_CONCURRENCY:[15,3,1,""]},"asyncworker.options.Events":{ON_EXCEPTION:[15,3,1,""],ON_SUCCESS:[15,3,1,""]},"asyncworker.options.Options":{BULK_FLUSH_INTERVAL:[15,3,1,""],BULK_SIZE:[15,3,1,""],MAX_CONCURRENCY:[15,3,1,""]},"asyncworker.options.RouteTypes":{AMQP_RABBITMQ:[15,3,1,""],HTTP:[15,3,1,""],SSE:[15,3,1,""]},"asyncworker.rabbitmq":{message:[20,0,0,"-"]},"asyncworker.rabbitmq.message":{RabbitMQMessage:[20,1,1,""]},"asyncworker.rabbitmq.message.RabbitMQMessage":{accept:[20,2,1,""],body:[20,2,1,""],process_exception:[20,2,1,""],process_success:[20,2,1,""],reject:[20,2,1,""],serialized_data:[20,2,1,""]},"asyncworker.routes":{AMQPRoute:[15,1,1,""],HTTPRoute:[15,1,1,""],Model:[15,1,1,""],Route:[15,1,1,""],RoutesRegistry:[15,1,1,""],SSERoute:[15,1,1,""],call_http_handler:[15,5,1,""],http_handler_wrapper:[15,5,1,""]},"asyncworker.routes.HTTPRoute":{aiohttp_routes:[15,2,1,""],validate_method:[15,2,1,""]},"asyncworker.routes.Model":{get:[15,2,1,""],keys:[15,2,1,""]},"asyncworker.routes.Route":{factory:[15,2,1,""]},"asyncworker.routes.RoutesRegistry":{add_route:[15,2,1,""],amqp_routes:[15,3,1,""],http_routes:[15,3,1,""],route_for:[15,2,1,""],sse_routes:[15,3,1,""]},"asyncworker.routes.SSERoute":{add_default_headers:[15,2,1,""]},"asyncworker.signals":{base:[21,0,0,"-"],handlers:[22,0,0,"-"]},"asyncworker.signals.base":{Freezable:[21,1,1,""],Signal:[21,1,1,""]},"asyncworker.signals.base.Freezable":{freeze:[21,2,1,""],frozen:[21,2,1,""]},"asyncworker.signals.base.Signal":{send:[21,2,1,""]},"asyncworker.signals.handlers":{base:[22,0,0,"-"],http:[22,0,0,"-"],rabbitmq:[22,0,0,"-"],sse:[22,0,0,"-"]},"asyncworker.signals.handlers.base":{SignalHandler:[22,1,1,""]},"asyncworker.signals.handlers.base.SignalHandler":{shutdown:[22,2,1,""],startup:[22,2,1,""]},"asyncworker.signals.handlers.http":{HTTPServer:[22,1,1,""]},"asyncworker.signals.handlers.http.HTTPServer":{shutdown:[22,2,1,""],startup:[22,2,1,""]},"asyncworker.signals.handlers.rabbitmq":{RabbitMQ:[22,1,1,""]},"asyncworker.signals.handlers.rabbitmq.RabbitMQ":{startup:[22,2,1,""]},"asyncworker.signals.handlers.sse":{SSE:[22,1,1,""]},"asyncworker.signals.handlers.sse.SSE":{startup:[22,2,1,""]},"asyncworker.sse":{consumer:[23,0,0,"-"],message:[23,0,0,"-"]},"asyncworker.sse.consumer":{SSEConsumer:[23,1,1,""],State:[23,1,1,""]},"asyncworker.sse.consumer.SSEConsumer":{interval:[23,3,1,""],keep_runnig:[23,2,1,""],on_connection:[23,2,1,""],on_connection_error:[23,2,1,""],on_event:[23,2,1,""],on_exception:[23,2,1,""],start:[23,2,1,""]},"asyncworker.sse.consumer.State":{EVENT_DATA_FOUND:[23,3,1,""],EVENT_NAME_FOUND:[23,3,1,""],WAIT_FOR_DATA:[23,3,1,""]},"asyncworker.sse.message":{SSEMessage:[23,1,1,""]},"asyncworker.task_runners":{ScheduledTaskRunner:[15,1,1,""]},"asyncworker.task_runners.ScheduledTaskRunner":{can_dispatch_task:[15,2,1,""],start:[15,2,1,""],stop:[15,2,1,""]},"asyncworker.testing":{HttpClientContext:[15,1,1,""],http_client:[15,5,1,""]},"asyncworker.time":{ClockTicker:[15,1,1,""]},"asyncworker.time.ClockTicker":{stop:[15,2,1,""]},"asyncworker.types":{registry:[25,0,0,"-"],resolver:[25,0,0,"-"]},"asyncworker.types.registry":{RegistryItem:[25,1,1,""],TypesRegistry:[25,1,1,""]},"asyncworker.types.registry.TypesRegistry":{get:[25,2,1,""],set:[25,2,1,""]},"asyncworker.types.resolver":{ArgResolver:[25,1,1,""],MissingTypeAnnotationError:[25,4,1,""]},"asyncworker.types.resolver.ArgResolver":{resolve_param:[25,2,1,""],wrap:[25,2,1,""]},"asyncworker.utils":{Timeit:[15,1,1,""],entrypoint:[15,5,1,""]},"asyncworker.utils.Timeit":{TRANSACTIONS_KEY:[15,3,1,""]},asyncworker:{app:[15,0,0,"-"],bucket:[15,0,0,"-"],conf:[15,0,0,"-"],connections:[15,0,0,"-"],consumer:[15,0,0,"-"],easyqueue:[17,0,0,"-"],exceptions:[15,0,0,"-"],http:[19,0,0,"-"],options:[15,0,0,"-"],rabbitmq:[20,0,0,"-"],routes:[15,0,0,"-"],signals:[21,0,0,"-"],sse:[23,0,0,"-"],task_runners:[15,0,0,"-"],testing:[15,0,0,"-"],time:[15,0,0,"-"],types:[25,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python m\u00f3dulo"],"1":["py","class","Python classe"],"2":["py","method","Python m\u00e9todo"],"3":["py","attribute","Python atributo"],"4":["py","exception","Python exce\u00e7\u00e3o"],"5":["py","function","Python fun\u00e7\u00e3o"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0994415283203125e":40,"0x10c10c7c8":40,"S\u00e3o":29,"Tamb\u00e9m":[34,40],"\u00edndic":13,"\u00fanic":30,"\u00fate":31,"a\u00e7\u00e3":35,"abstract":[15,17],"ap\u00f3s":34,"ass\u00edncron":[12,13,27,28,35,40],"atrav\u00e9s":[31,32,35],"c\u00f3dig":[9,12,15,16,17,18,19,20,21,22,23,24,25,29,30,31,35,36,40],"c\u00f3p":33,"cen\u00e1ri":27,"ci\u00eanc":9,"class":[11,13,15,16,17,20,21,22,23,24,25,28,31,34,35,40],"conclu\u00edd":34,"conex\u00e3":[27,34,36],"conex\u00f5":[27,29],"conte\u00fad":37,"cria\u00e7\u00e3":[32,33,34,35],"default":[15,34],"defini\u00e7\u00e3":31,"descri\u00e7\u00e3":2,"dicion\u00e1ri":[30,34],"din\u00e2m":[9,31],"ent\u00e3":[30,31,37],"enum":[15,23,29,37],"espec\u00edf":12,"est\u00e3":[9,29,31,34],"est\u00edmul":[12,13,29,33],"estat\u00e3":34,"exca\u00e7\u00e3":34,"exce\u00e7\u00e3":40,"f\u00f3rmul":34,"far\u00e3":29,"final":40,"float":15,"fun\u00e7\u00e3":[9,13,15,33,35,38],"fun\u00e7\u00f5":29,"function":9,"funda\u00e7\u00e3":31,"import":[9,27,31,34,36,37,39,40],"in\u00edci":[13,35],"inst\u00e2nc":[8,29,30,31,32,34,36,37,40],"instru\u00edm":31,"int":[15,17,20,31,34],"intermedi\u00e1ri":9,"ir\u00e1":34,"long":30,"m\u00e1xim":34,"m\u00e9tod":[1,15,29,31,34,37,39],"m\u00e9tric":40,"m\u00f3dul":[13,29,31,36],"m\u00faltipl":[11,12,29,35,38],"manuten\u00e7\u00e3":30,"n\u00edvel":31,"n\u00famer":34,"necess\u00e1ri":[9,29,34],"new":[6,15,16,17],"obrigat\u00f3ri":[29,37],"op\u00e7\u00f5":[29,34],"p\u00e1gin":13,"p\u00f3s":37,"padr\u00e3":[11,31,34,37],"par\u00e2metr":[15,17,29,32,33,34,35],"poss\u00edv":29,"poss\u00edvel":[9,30,31,34,36,40],"pr\u00e1tic":30,"pr\u00e9v":34,"pr\u00f3pri":[9,30],"public":34,"r\u00e1p":[13,35],"raz\u00e3":9,"requisi\u00e7\u00e3":[13,31,36],"requisi\u00e7\u00f5":[32,35],"return":[9,17,31,32,36],"s\u00f3l":15,"ser\u00e3":[29,31],"situa\u00e7\u00f5":34,"static":15,"transa\u00e7\u00f5":[35,38],"trav\u00e9s":31,"unit\u00e1ri":[10,13],"usu\u00e1ri":31,"utilit\u00e1ri":[13,35],"utilit\u00e1ti":39,"v\u00e1l":31,"v\u00e1r":[12,13,40],"v\u00eam":37,"vari\u00e1vel":34,"vers\u00e3":[4,8,31,32,37,40],"vers\u00f5":37,"ves\u00f5":37,"with":[3,15,40],Com:34,Como:[27,32,34],Ele:29,Eles:31,Essa:[9,12,31,32,34],Essas:[12,13],Esse:[9,29,31,34,36],Esses:[31,34],Isso:[12,31,33,34],Mais:[8,31],Por:[11,12,13,29,31,33,34],Uma:[13,31,35],__call__:31,_amqprouteoptions:34,_asynci:15,_handl:34,_hooks_:30,_id:31,_on_event:36,_type:25,_wrapp:[9,31],abaix:[13,33],abc:[15,16],abert:27,abrim:27,abstracteventloop:17,accept:[20,34],access:40,access_some_remote_content:40,acess:[34,36],ack:[15,17,20,34,36,37],acord:33,actions:[15,20,34],acts:15,add:[15,16],add_default_headers:15,add_rout:15,adding:6,adicion:[1,8,11,31,35],age:30,agor:37,aguard:34,aind:[8,31],aioamqp:[6,17],aiohttp:[8,15,31,32,36],aiohttp_rout:15,aiologg:12,aiored:27,algum:[9,31,34,36],alguns:[31,33,34],all:[15,16,17,21],allow:[15,16],allow_mutation:15,along:15,also:[15,16],alter:[31,34],ambas:[34,36],ambient:34,ambos:36,amqp_conn:[34,36],amqp_messag:[20,34],amqp_rabbitmq:[15,30,34,36,40],amqp_rout:15,amqpconnection:[15,16,17,35,36],amqpmessag:[15,17,20,34],amqprout:15,ancestral:[15,16],and:[1,6,15,16,17],anot:39,anoth:34,another_exchang:34,anterior:[12,27],antes:[27,31],antig:37,any:[15,16,17,21,25],apen:[9,12,32,33,34,35],aplic:[8,10,12,13,27,29,30,31],app:[3,9,12,13,22,24,26,31,32,34,35,36,39,40],appid:36,application:[15,17],apps:12,aqu:[9,11,31,32,34,37],arbitrary_types_allowed:[15,16],are:21,argresolv:25,args:21,arguments:[15,17,21],armazen:[28,35],asgard:[34,36,37],assim:[9,27,31,34,36,37],assinatur:[29,31,34,37],assum:36,async:[9,13,15,16,17,20,21,22,23,27,30,31,32,34,36,37,39,40],asynci:[15,17,21,40],asynciterator:15,asyncowk:[29,31],asynctest:11,asyncwork:[1,8,9,12,27,30,31,32,33,34,35,36,39,40],asyncworker_:15,asyncworker_flush_timeout:34,asyncworker_http_host:31,asyncworker_http_port:31,asynqueu:[15,17],asynwork:36,atend:36,atribut:[11,31,34,37],atual:12,atualiz:[4,13,35],aut:[15,16],autentic:31,auth_required:31,authorization:31,automat:[34,36],automatically:15,autonameenum:15,availabl:[15,16],await:[9,15,27,31,34,40],awaited:15,b2wdigital:13,badg:8,banc:27,bas:[15,16,17,18,20,23,24,25,26],based:21,basejsonqueu:17,basemodel:[15,16],basequeu:17,basesettings:15,basic_auth:31,bast:[11,31,34,39],befor:[15,17],behav:[15,21],bem:[27,32],bibliotec:27,binding:31,boa:30,body:[15,17,20,36,37],bool:[15,16,17],boot:29,brok:[13,17,34],bucket:[23,26,34],bucket_class:[15,23],bucketfullexception:15,build:8,bulk:34,bulk_flush_interval:[6,15,34],bulk_siz:[15,35,36],busc:13,by_id:31,bytes:[15,16,17,23],cad:[11,29,33,35,36,37],calabl:7,call:[15,17],call_http_handl:[9,15,31],callabl:[7,15,17,32,33,35,40],callback:[15,17,21,40],called:[15,17],camp:35,can:17,can_dispatch_task:15,cancelling:17,capaz:36,cas:[11,27,31,34,36,40],caus:[11,12,15,33],caused:15,central:29,cerc:31,certez:11,cham:[8,9,15,29,31,33,34,37,39,40],chang:1,changelog:[13,37],channel:17,chav:34,cheg:33,cicl:[12,27,30],classmethod:[15,16],client:[17,27],climat:8,clock:15,clocktick:15,clos:[17,27],cod:[1,6,8],codeclimat:8,codeowners:1,coerent:2,collections:[15,16,21],comando:36,comec:29,commits:[3,4,5,6,7,8],common:[15,16],compartilh:[13,27,28,35],compat:34,compatibility:6,complet:35,complex:31,comport:12,comum:27,comunic:34,condition:[15,18],conduct:6,conect:29,conf:26,config:[15,16],configur:37,confirm:[20,34,36],conflit:30,connect:21,connection:[15,16,18,26],connection_parameters:17,connections:[3,26,29,34,36],connectionsmapping:[15,16],connects:17,consegu:34,consider:8,consig:31,construtor:[29,31,34],consult:37,consum:[17,26,35],consume_all_queu:15,consumed:[15,17],consumer_nam:17,consumer_tag:[15,17],consumption:[15,17],cont:[31,40],content:15,content_typ:17,contents:26,context:[31,35,38],contributing:6,cor:15,coro_ref:25,corotin:[9,31,32],coroutin:[15,17,21,40],corret:[9,31],count:[15,16],counts:[34,36,37],coverag:1,create_pool:27,cri:[11,12,27,28,33,34,35,37],curl:36,custom:[15,17],customiz:[8,10,13],dad:[13,27,28,31,35,40],dat:[8,15,16,17,21,34,36],deadlock:34,decl:1,declar:[29,31,34,36],decod:17,decor:[9,31,32],decorat:31,decorator:[9,15,16,29,32,33,35,38,39],decorators:[8,10,13,31],decortor:34,def:[9,27,30,31,32,34,36,37,39,40],defaultvalu:[15,34],defin:[15,18,28,31,34,35],definition:[15,18],del:[31,32,33],delath:31,delegat:17,delegate_class:17,delivery_tag:[15,17,20,34],deliverymod:17,dentr:[29,34,40],depend:12,dependenc:2,dependency:1,dependent:29,deployment_inf:36,deployment_success:36,depo:[27,31,37],deposit:29,deprec:[8,15],descart:[20,34],desconect:36,desej:34,desenvolv:13,deserializ:17,deserialization:15,deserialization_method:17,deserialized:[15,17],deserialized_dat:17,dess:[29,31,33,34,37],destin:34,detalh:[8,13,32,33],dev:[9,15,29,31,34],devolv:[34,36,37],diari:34,dict:[15,16,17,23,29,34],diferent:[12,13,33,34],diret:31,disponibiliz:30,diss:[9,34],diz:[29,31,34],doc:[11,32],docs:[1,6,32],document:[7,15],dogs:34,dois:31,drain_handl:[30,34,36,37,40],durant:12,during:[15,17],each:[15,16],easyqueu:[1,15,16,20,26,34],econtr:13,efet:29,emptyqueueexception:17,enabling:6,encher:34,encontr:31,endpoint:35,entand:9,entend:[12,13,33],entrypoint:15,enumeration:[15,23],env:34,env_prefix:15,env_settings:15,envelop:17,envi:[34,36],envs:[32,33,35],envvars:31,erro:[1,31,36],error:[15,40],errors:[34,36,37],erros:[34,36],escolh:[30,32,33,35],escrev:[9,10,12,13,31,32,34],escrit:34,escut:[32,33,35],especial:[29,31],esper:34,estad:30,estam:[31,36],estar:[9,29,32,33,35,36],estav:2,estej:[12,31],estimul:32,estiv:[15,34],estivere:37,esvazi:34,event:[12,13,15,21,27,33,36],event_body:23,event_data_found:23,event_handl:37,event_nam:[23,36],event_name_found:23,event_raw_body:23,events:[13,15,17,34,35,37],every:[15,17],every_5_seconds:39,evit:[30,34],exc_tb:40,exc_type:40,exc_val:40,exception:[15,17,18,23,25,34,36,37],exceptions:26,exchang:[15,16,17,34],execu:[20,34,40],execut:29,exempl:[9,27,31,33,35,36],exist:34,exmepl:29,experimental:31,explicit:[31,40],extern:33,extra:[31,32],extra_registri:25,factory:15,fails:[15,17],fal:[29,36],fals:[15,16,17,20,34],far:[29,31],fat:12,faz:[9,11,27,31,32,37],featur:[1,6,7,8],fech:27,feit:31,fic:[34,36],fil:[5,20,29,33,34,35,37],fim:[20,27,34],finaliz:27,fiqu:34,fired:21,fix:[8,13,34,35,38],fluentd:[34,36,37],flush:35,flush_timeout:34,font:[15,16,17,18,19,20,21,22,23,24,25,29,34],foo:40,form:[29,31],framework:[12,13],freez:[15,21],freezabl:[15,16,21],frent:36,from:[6,9,17,27,31,34,36,37,39,40],frozen:21,funcion:[8,13],functools:9,furth:[15,17],futur:[8,15],generat:[15,16],generated:17,generic:[3,15,16,17],ger:[12,13,31,36],geral:[12,36],gerenc:[35,38],get:[9,15,17,25,31,32,36],get_authenticated_us:31,get_connection:15,get_connection_for_rout:15,get_event_loop:40,gitattribut:8,github:13,given:15,glob:[30,31],guard:31,guest:[34,36,37],gui:13,handl:[7,8,10,13,15,19,20,29,32,33,34,35,36,37],handled:[15,17],handler_error:[15,17],handlers:[9,13,15,21,28,30,32,34,35],handling:[15,17],happens:15,headers:31,heartbeat:17,hell:36,hook:1,hooks:[13,28,35],host:[15,17,34,36,37],hostnam:34,html:32,http:[8,10,13,15,21,29,33,35],http_client:[15,24],http_handler_wrapp:15,http_request:9,http_rout:15,httpclientcontext:[15,24],httprout:15,https:[13,32],httpserv:[15,22],httpstatus:31,ide:36,identifi:17,immediat:[15,16,17],implement:[7,8,15,17,31],implementation:21,inclusiv:30,incompat:12,incompatibil:[11,13],indetermin:[12,13],index:36,indic:[20,34],individual:35,info:37,inform:32,inicializ:[13,27,28,35],init_red:27,initialization:[15,17],injet:30,inner:9,insert:1,insid:15,instanc:31,instanced:[15,17],integr:2,inteir:34,interess:31,interval:[13,15,23,35,38],introdu:13,invalid:[15,18],invalidconnection:[15,18],invalidmessagesizeexception:17,invalidrout:[15,18],is_connected:17,is_empty:15,is_full:15,isn:17,issu:[1,12],item:15,items:[15,16],iterabl:[15,16,29],iteration:15,json:[17,36],json_respons:[9,31,32,36],jsonqueu:[15,16,17],junt:9,keep_runnig:[15,23],keeping:[15,16],keeps:[15,16],key:[15,17,34],keyerror:40,keys:[15,16],kwarg:1,kwargs:[15,17,21,29,40],lanc:[34,36],lembr:30,len:36,lend:35,levant:40,liber:34,licens:5,lid:31,lik:[15,34],linh:36,list:[9,15,16,21,23,29,31,33,34,36,37],localhost:27,locks:21,log:36,log_callback:40,logg:[17,37],logging:17,logs:12,loop:[12,15,17,27,36,40],loops:[11,12],los:[9,30],lot:37,main:[15,16,36,40],maior:12,mandatory:[15,16,17],manipul:30,mant:[27,30],manual:31,mapping:[15,16],marc:[20,34,40],match:31,max_concurrency:15,max_message_length:17,may:[15,17],melhor:[1,37],menor:34,mensag:[1,13,20,29,33,34,36,37],mensagens:[33,34,36,37],mensg:35,mesm:[29,31,33,34,36,40],messag:[15,26,30,34,36,37,40],messageerror:[15,17],method:21,methods:[1,9,31,32,36],min:34,missingtypeannotationerror:25,model:[15,34],models:[31,37],modul:[1,26],moment:[9,31,34],mostr:[32,36],mov:1,msg:[15,17,34],msgs:34,mud:[2,33,37],mudanc:37,muit:[12,40],multipl:3,mutablemapping:15,my_handler_decorator:9,myapp:39,myproject:31,mywork:36,nad:34,nam:[15,16,17,36,40],named:[8,21],nao:1,necess:[27,31],necessari:29,necessit:[27,34],needed:17,nenhum:[31,34],ness:[8,29,31,34,36,37,39],nom:[30,31,34],non:[15,16,17,23,25,29,40],non_persistent:17,noss:[29,31],not:[31,35],notifications:17,nov:[11,12,28,31,32,33,34,35,40],obj:25,object:[15,16,17,20,21,22,23,24,25,40],objet:[7,9,12,13,29,32,33,34,35,36,37,39],obs:30,obtain:6,occurred:15,on_before_start_consumption:[15,17],on_connection:23,on_connection_error:[15,17,23],on_consumption_start:[15,17],on_error:17,on_event:23,on_exception:[15,20,23,34],on_message_handle_error:[15,17],on_queue_error:15,on_queue_messag:[15,17],on_shutdown:27,on_startup:[15,27],on_success:[15,20,34],once:[15,17],onde:[15,29,32,33,34,35],one:17,opcional:34,optional:[15,17,25],options:[6,16,20,26,29,35,36],org:32,orig:[29,33],origens:[12,13,29],original:[20,34,37],original_queu:34,orign:12,other:34,outr:[29,34],overwritten:[15,17],owner:21,packag:26,par:[2,4,9,11,12,13,14,17,20,27,29,30,32,33,35,36,37,40],param_nam:25,param_typ:25,paramet:8,parameters:6,parametr:[9,20,29,31,33,35],parametriz:[32,33,35],parse_path:[19,31],part:37,pass:[8,31,32,34,37],password:[15,17,23,34,36,37],path:[32,33,35],paths:[29,31],payload:17,peg:[31,34],pel:[9,12,30,31,34,36],permit:[9,27,31,39],persistent:[17,27],plan:36,pod:[9,12,13,29,30,31,32,33,34,36,37,40],pois:31,pont:[29,34,36],pop_all:15,popul:31,porqu:33,port:[32,33,35],position:1,poss:31,possibil:37,possu:[31,34],posu:39,pra:34,prametr:31,precedent:34,precis:[11,27,31,32,34,36,37],prefetch:35,prefetch_count:[15,17,34,36,37],prefretch:34,pres:34,present:31,primeir:[15,29,31],principal:[9,13,28,34,35],print:[34,36,39,40],printit:40,problem:12,process:[27,34],process_exception:20,process_success:20,processed_messag:30,procur:31,projet:[2,12,14],properti:[15,16,17],property:[15,17,20,21],provided:17,publish:17,published:17,publishing:17,pud:31,put:[15,16,17,34],py38:8,pydantic:[2,4,15,16,34],python:[6,12,13],quaisqu:[29,31],qualqu:[12,13],quand:[1,15,31,32,33,34,36],queir:34,quer:[31,34,40],queu:[15,16,26,34,40],queue_nam:[15,17],queueconsumerdelegat:[15,17],rabbitmq:[13,15,21,26,29,33,35,37],rabbitmqmessag:[15,20,34,37],rabitmq:34,rais:40,raised:[15,17],random:17,raw:[3,4,5,6,7,8,15],ready:[15,17],realiz:34,receb:[8,9,12,13,15,29,32,33,35,37,40],receiv:15,received:36,receivers:21,recoloc:[20,34],recomend:30,reconect:36,recorrent:13,red:27,regist:[15,16],registered:21,registers:15,registr:[27,29,31,33],registry:[8,31],registryit:25,regr:[9,32,33,35],reject:[15,17,20,34,36,37],rejeit:[20,34],releas:8,remov:[1,8],renov:12,report:8,reports:1,represent:[27,29,34],req:[31,32,36],request:[8,9,15,29,32,33,35,36],requestwrapp:[8,9,15],requeu:[15,17,20,34,36],resolu:[9,31],resolve_p:25,respect:31,respons:[31,32,36],responsibl:[15,16],result:31,retorn:[9,31,32,37],returns:[15,16],rod:[2,11,12,13,27,34,35,38],rot:[29,34,36],rout:[1,6,9,18,26,29,30,32,33,35,36,37,40],route_for:[1,15],route_inf:[15,23],route_typ:[15,16],routedef:15,routesregistry:[1,15],routetyp:[9,15,16,29,30,31,32,34,36,37,40],routing:[17,34],routing_key:[15,16,17,34],run:[15,27,29,36,39],run_every:[15,39],run_every_max_concurrency:15,run_on_shutdown:[15,28,35],run_on_startup:[1,15,28,35],run_until_complet:40,runn:11,running:15,sab:[9,29,31],schedul:15,scheduledtaskrunn:15,seconds:15,seconds_between_conn_retry:17,seg:31,segu:31,seguint:[29,31,34,36],segund:34,sej:[9,12,29,30,31,34,36,39,40],self:31,sempr:[9,31,34,36],send:[2,11,12,21,31],sending:17,sends:21,ser:[2,8,9,12,13,15,20,27,29,31,32,33,35,36,37,39,40],serializ:17,serializabl:17,serialized:17,serialized_dat:[15,16,17,20],serv:[13,32,33,35],servidor:[13,34,36],set:[25,31],set_connections:[15,16],settings:15,setup:[2,4],should:[15,17],shudtdown:[13,28,35],shutdown:[15,22],shutdown_os_signals:15,sid:[13,35],sigint:15,signal:[15,21],signalhandl:22,signals:[15,16,26],signif:[12,31,34],signific:29,sigterm:15,simpl:[9,31,32],simplesmet:32,sinaliz:27,singletons:30,sintax:31,siz:15,sleep:[15,40],sobr:[13,28,35,36],something:15,sphinx:[1,6],sse:[15,21,26,36,37],sse_conn:36,sse_rout:15,sseconnection:[15,16,36],sseconsum:23,ssemessag:23,sserout:15,stabl:32,stag:[15,17],start:[15,23],started:[15,17],starts:[15,17],startup:[13,15,22,28,35],stat:23,status:31,status_update_event:36,stop:15,stop_consum:17,stopping:17,str:[15,16,17,23,25,29],structur:6,subclass:[15,16],submodul:26,subpackag:26,substitu:12,sucess:[31,34],suficient:31,suport:[7,33],tag:[1,2,3,4,5,6,7,8,17],tak:21,talvez:31,tamanh:34,task:[15,36],task_runners:26,taskid:36,taskstatus:36,teh:34,temp:[12,13,33,34,35,38,40],tent:31,tentant:36,tentat:8,ter:[11,12,34,40],test:[2,10,13],testing:26,tha:21,that:[15,16,17],the:[1,15,16,17,21],tick:15,tim:[17,26,40],timeit:[13,15,35,38],timeout:35,tip:[13,29,31,34,35],tiv:34,tod:[12,29,30,31,34,37],tom:34,top:9,torn:[30,37],total:40,traceback:40,track:[15,16],transactions:[15,40],transactions_key:15,trat:[12,34],tratament:34,triggered:[15,17],tru:[11,15,16,20,34,36],tud:13,type:[9,15,16,17,23,25,29,30,31,32,34,36,37,40],type_definition:25,typehints:31,types:[8,31],types_registry:31,typesregistry:[25,31],typing:[15,16,17,34],unauthorized:31,uncaught:[15,17],undecodablemessageexception:17,union:[15,16,17,23],unparsed:15,updating:6,url:[23,36],usa:34,usad:[29,31,34],usag:[15,16],usam:[12,27],usand:36,usar:[9,12],use:21,use_default_loop:11,used:[15,17],useful:17,user:[31,34,36,37],user_id:31,userdict:15,userlist:21,usernam:[15,17,23,34],users:31,using:21,uso:[13,27,37],utiliz:[27,30,40],utils:[26,40],vai:[31,34],val:30,valid:[15,17],validate_method:15,validation:15,valor:[31,35],valu:[15,16,25],valueerror:[15,17,18],vam:[15,31],vari:[30,31],vaz:31,vej:[31,32],vem:9,ver:[33,34],vez:[2,34,40],vhost:[15,16,34,36,37,40],via:12,vid:[12,27,30],vind:[32,33,35],virtual:[15,16,34],virtual_host:17,voc:[11,12,13,29,30,31,33,34,36,37],wait_closed:27,wait_for_dat:23,waiting:15,was:[15,17],web:[8,9,15,31,32,36],web_request:15,web_routedef:15,when:[15,17],which:21,will:[15,17],with_typ:[15,16],words_to_index:30,work:[12,13,35],workers:[12,13,27],world:36,wrap:25,wrapp:[8,9,15],wraps:9,xablau:[34,40],xen:34,xxxxxxxxxxxxx:15},titles:["Changelog","0.10.0","0.10.1","0.11.0","0.11.1","0.11.2","0.11.3","0.11.4","0.11.5","Aplicando decorators customizados a um handler HTTP","Guia de desenvolvimento","Escrevendo Testes Unit\u00e1rios","Incompatibilidades","Bem vindos \u00e0 documenta\u00e7\u00e3o oficial do projeto Asyncworker","Introdu\u00e7\u00e3o","asyncworker package","asyncworker.connections package","asyncworker.easyqueue package","asyncworker.exceptions package","asyncworker.http package","asyncworker.rabbitmq package","asyncworker.signals package","asyncworker.signals.handlers package","asyncworker.sse package","asyncworker.testing package","asyncworker.types package","asyncworker","Hooks de startup e shudtdown","Asyncworker App","Sobre a classe principal App","Compartilhamento de dados e inicializa\u00e7\u00f5es ass\u00edncronas","Regras para cria\u00e7\u00e3o de um handler HTTP","HTTP","Tipos de Handlers","RabbitMQ","Guia de uso","In\u00edcio r\u00e1pido","Atualizando sua App Asyncworker","Utilit\u00e1rios","Rodando uma fun\u00e7\u00e3o em um intervalo fixo de tempo","Timeit"],titleterms:{"a\u00e7\u00e3":34,"ass\u00edncron":30,"atrav\u00e9s":36,"c\u00f3dig":34,"class":29,"cria\u00e7\u00e3":31,"fun\u00e7\u00e3":39,"in\u00edci":36,"m\u00faltipl":40,"par\u00e2metr":31,"r\u00e1p":36,"requisi\u00e7\u00f5":36,"transa\u00e7\u00f5":40,"unit\u00e1ri":11,"utilit\u00e1ri":38,Uma:34,adicion:34,amqpconnection:34,and:13,apen:31,aplic:9,app:[15,27,28,29,30,37],armazen:30,asyncwork:[13,15,16,17,18,19,20,21,22,23,24,25,26,28,29,37],atualiz:[8,37],bas:[21,22],bem:13,bucket:15,bulk_siz:34,cad:34,callabl:31,camp:34,changelog:0,compartilh:30,complet:34,conf:15,connection:17,connections:[15,16],consum:[15,23,36],contents:[15,16,17,18,19,20,21,22,23,24,25],context:40,cri:29,customiz:9,dad:[30,34,36],decorator:[31,34,40],decorators:[9,19],defin:29,desenvolv:10,document:13,easyqueu:17,endpoint:36,envs:31,escolh:[31,34],escrev:11,escut:31,estar:31,events:36,exceptions:[15,17,18],exempl:34,fil:36,fix:39,flush:34,gerenc:40,gui:[10,35],handl:[9,31],handlers:[22,29,31,33],hooks:27,http:[9,19,22,31,32,36],incompatibil:12,indic:13,individual:34,inicializ:30,interval:39,introdu:14,lend:36,mensg:34,messag:[17,20,23],modul:[15,16,17,18,19,20,21,22,23,24,25],not:[8,34],nov:29,objet:31,oficial:13,onde:31,options:[15,34],packag:[15,16,17,18,19,20,21,22,23,24,25],par:[31,34],parametr:34,parametriz:31,path:31,port:31,prefetch:34,principal:29,projet:13,queu:17,rabbitmq:[20,22,34,36],receb:[31,34,36],registry:25,regr:31,request:31,resolv:25,rod:[36,39],rout:[15,31,34],run_on_shutdown:27,run_on_startup:27,ser:34,serv:[31,36],shudtdown:27,sid:36,signals:[21,22],sobr:[29,34],sse:[22,23],startup:27,submodul:[15,17,19,20,21,22,23,25],subpackag:[15,21],tabl:13,task_runners:15,temp:39,test:11,testing:[15,24],tim:15,timeit:40,timeout:34,tip:33,types:25,uso:35,utils:15,valor:34,vind:[13,31],work:36}})
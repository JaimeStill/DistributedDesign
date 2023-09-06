namespace Distributed.Core.Gateway;
public class GatewayService
{
    readonly GatewayOptions gateway;

    public GatewayService(GatewayOptions gateway)
    {
        this.gateway = gateway;
    }

    public Guid GatewayId => gateway.Id;
    public List<Endpoint> Endpoints => gateway.Endpoints;

    public Endpoint GetEndpoint(string name) =>
        gateway.Endpoints.First(x =>
            x.Name.ToLower() == name.ToLower()
        );
}
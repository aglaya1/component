import { DangerZone } from 'expo';
let { Branch } = DangerZone;

Expo.DangerZone.Branch.subscribe((bundle) => {
  if (bundle && bundle.params && !bundle.error) {
    class ArticleScreen extends Component {
  componentDidMount() {
    this.createBranchUniversalObject();
  }

  async createBranchUniversalObject() {
    const { article } = this.props;

    this._branchUniversalObject = await Expo.DangerZone.Branch.createBranchUniversalObject(
      `article_${article.id}`,
      {
        title: article.title,
        contentImageUrl: article.thumbnail,
        contentDescription: article.description,
        // This metadata can be used to easily navigate back to this screen
        // when implementing deep linking with `Branch.subscribe`.
        metadata: {
          screen: 'articleScreen',
          params: JSON.stringify({ articleId: article.id }),
        },
      }
    );
  }

  onShareLinkPress = async () => {
    const shareOptions = {
      messageHeader: this.props.article.title,
      messageBody: `Checkout my new article!`,
    };
    await this._branchUniversalObject.showShareSheet(shareOptions);
  };
}

});}
